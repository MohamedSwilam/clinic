<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use App\IndexResponse;
use App\Phone;
use App\Transformers\UserTransformer;
use App\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', User::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(User::employees()->with(['roles', 'phones'])))->execute()
                , new UserTransformer()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param EmployeeRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(EmployeeRequest $request)
    {
        $this->authorize('store', User::class);


        $data = $request->except('role');
        $data['view_in_website']=='true'?$data['view_in_website']=true:$data['view_in_website']=false;
        $data['image'] = download_image('image', config('paths.user-image.create'));
        $data['email_verified_at'] = now();
        $data['password'] = bcrypt($request->password);

        $user = User::create($data);

        if ($request->phones){
            foreach (json_decode($request->phones) as $phone){
                $phone= Phone::create([
                    'number' => $phone->number,
                    'country_code' => $phone->country_code,
                ]);
                $user->phones()->save($phone);
            }
        }

        $user->assignRole($request->role);

        return $this->respond(
            'Employee Created Successfully',
            fractal(
                User::where('id', $user->id)->with(['roles', 'roles.permissions', 'permissions'])->first(),
                new UserTransformer()
            )
        );
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show($id)
    {
        $this->authorize('show', User::class);
        return $this->respond('fetched successfully', fractal(
            User::where('id', $id)
                ->with('roles', 'permissions', 'roles.permissions', 'phones')
            ->first(),
            new UserTransformer()
            )
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param EmployeeRequest $request
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(EmployeeRequest $request, $id)
    {
        $this->authorize('update', User::class);

        $user = User::find($id);
        $data = $request->except('role');
        $data['view_in_website']=='true'?$data['view_in_website']=true:$data['view_in_website']=false;
        $data['image'] = download_image('image', config('paths.user-image.create'))? :$user->image;
        if ($request->password){
            $data['password'] = bcrypt($data['password']);
        }

        $user->phones()->each(function ($query){
            $query->delete();
        });

        $user->update($data);

        foreach (json_decode($request->phones) as $phone){
            $phone= Phone::create([
                'number' => $phone->number,
                'country_code' => $phone->country_code,
            ]);
            $user->phones()->save($phone);
        }

//        foreach ($data['phones'] as $phone){
//            $phone= Phone::create($phone);
//            $user->phones()->save($phone);
//        }

        if ($request->role){
            $user->syncRoles($request->role);
        }

        return $this->respond(
            'Employee Updated Successfully',
            fractal(
                User::where('id', $user->id)->with(['roles', 'roles.permissions', 'permissions'])->first(),
                new UserTransformer()
            )
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy($id)
    {
        $this->authorize('destroy', User::class);

        $user = User::find($id);

        Storage::disk('public')->delete(config('paths.user-image.delete').$user->image);

        User::find($id)->delete();

        return $this->respond('Employee Deleted Successfully');
    }
}
