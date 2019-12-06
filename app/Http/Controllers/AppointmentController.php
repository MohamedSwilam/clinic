<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Http\Requests\AppointmentRequest;
use App\IndexResponse;
use App\Patient;
use App\Phone;
use App\Transformers\AppointmentTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Appointment::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(Appointment::query()))->execute(),
                new AppointmentTransformer()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param AppointmentRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(AppointmentRequest $request)
    {
        $this->authorize('store', Appointment::class);

        $data = $request->validated();

        if ($data['new_patient']){
            $patient = Patient::create($data['patient']);

            foreach ($data['patient']['phones'] as $phone){
                $phone= Phone::create($phone);
                $patient->phones()->save($phone);
            }
            $data['patient_id'] = $patient->id;
        }

        $appointment = Appointment::create($data);

        return $this->respond(
            'Appointment Created Successfully',
            fractal(
                Appointment::find($appointment->id),
                new AppointmentTransformer()
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
        $this->authorize('index', Appointment::class);
        return $this->respond('fetched successfully', fractal(
                Appointment::where('id', $id)
                    ->first(),
                new AppointmentTransformer()
            )
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param AppointmentRequest $request
     * @param $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(AppointmentRequest $request, $id)
    {
        $this->authorize('update', Appointment::class);

        $appointment = Appointment::find($id);

        $data = $request->validated();

        $appointment->update($data);

        return $this->respond(
            'Appointment Updated Successfully',
            fractal($appointment, new AppointmentTransformer())
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
        $this->authorize('destroy', Appointment::class);

        Appointment::find($id)->delete();

        return $this->respond('Appointment Deleted Successfully');
    }
}
