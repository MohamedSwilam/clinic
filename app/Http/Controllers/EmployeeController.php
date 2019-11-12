<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use App\IndexResponse;
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
                (new IndexResponse(User::employees()))->execute()
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
        $data['image'] = download_image('image', config('paths.user-image.create'));
        $data['email_verified_at'] = now();
        $data['password'] = bcrypt($request->password);

        $user = User::create($data);

        $user->assignRole($request->role);

        return $this->respond('Employee Created Successfully', fractal($user, new UserTransformer()));
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
        $data['image'] = download_image('image', config('paths.user-image.create'))? :$user->image;
        if ($request->password){
            $data['password'] = bcrypt($data['password']);
        }

        $user->update($data);

        if ($request->role){
            $user->syncRoles($request->role);
        }

        return $this->respond('Employee Updated Successfully', fractal($user, new UserTransformer()));
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
