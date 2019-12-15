<?php

namespace App\Http\Controllers;

use App\Http\Requests\PatientRequest;
use App\IndexResponse;
use App\Patient;
use App\Phone;
use App\Transformers\PatientTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Patient::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(Patient::query()))->execute()
                , new PatientTransformer()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PatientRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(PatientRequest $request)
    {
        $this->authorize('store', Patient::class);

        $data = $request->validated();

        $patient = Patient::create($data);

        foreach ($data['phones'] as $phone){
            $phone= Phone::create($phone);
            $patient->phones()->save($phone);
        }

        return $this->respond(
            'Patient Created Successfully',
            fractal(
                Patient::where('id', $patient->id)->first(),
                new PatientTransformer()
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
        $this->authorize('show', Patient::class);
        return $this->respond('fetched successfully', fractal(
                Patient::where('id', $id)
//                    ->paymentStatistics()
                    ->first(),
                new PatientTransformer()
            )
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PatientRequest $request
     * @param $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(PatientRequest $request, $id)
    {
        $this->authorize('update', Patient::class);

        $patient = Patient::find($id);

        $data = $request->validated();

        $patient->update($data);

        $patient->phones()->each(function ($query){
            $query->delete();
        });

        foreach ($data['phones'] as $phone){
            $phone= Phone::create($phone);
            $patient->phones()->save($phone);
        }

        return $this->respond(
            'Patient Updated Successfully',
            fractal(
                Patient::where('id' , $patient->id)->first(),
                new PatientTransformer()
            )
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy($id)
    {
        $this->authorize('destroy', Patient::class);

        Patient::find($id)->delete();

        return $this->respond('Patient Deleted Successfully');
    }
}
