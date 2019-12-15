<?php

namespace App\Http\Controllers;

use App\Appointment;
use App\Http\Requests\AppointmentRequest;
use App\IndexResponse;
use App\Patient;
use App\Payment;
use App\Phone;
use App\ReservationDuration;
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

        ReservationDuration::find($data['reservation_duration_id'])->decrementCounter();

        $appointment = Appointment::create($data);

        if ($data['has_payment']){
            $data = $data['payment'];
            $data['appointment_id'] = $appointment->id;
            $data['to_be_paid'] = $appointment->reservationType->max_price;
            $data['patient_id'] = $appointment->patient->id;
            Payment::create($data);
        }

        return $this->respond(
            'Appointment Created Successfully',
            fractal(
                Appointment::where('id', $appointment->id)->get(),
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
        $this->authorize('show', Appointment::class);
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

        if ($data['has_payment']){
            $appointment->payment()->update($data['payment']);
        }

        return $this->respond(
            'Appointment Updated Successfully',
            fractal(Appointment::where('id', $id)->get(), new AppointmentTransformer())
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

        $appointment = Appointment::find($id);

        $appointment->reservationDuration->incrementCounter();

        $appointment->delete();

        return $this->respond('Appointment Deleted Successfully');
    }
}
