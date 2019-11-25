<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReservationDurationRequest;
use App\IndexResponse;
use App\ReservationDuration;
use App\ReservationType;
use App\Transformers\ReservationDurationTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReservationDurationController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', ReservationDuration::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(ReservationDuration::query()))->execute(),
                new ReservationDurationTransformer()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ReservationDurationRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(ReservationDurationRequest $request)
    {
        $this->authorize('store', ReservationDuration::class);

        $data = $request->validated();

        unset($data['reservation_type_id']);

        $duration = ReservationDuration::create($data);

        $duration->reservationType()->associate(ReservationType::find($request->reservation_type_id));
        $duration->save();

        return $this->respond(
            'Reservation Duration Created Successfully',
            fractal(
                $duration,
                new ReservationDurationTransformer()
            )
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ReservationDurationRequest $request
     * @param $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(ReservationDurationRequest $request, $id)
    {
        $this->authorize('update', ReservationDuration::class);

        $duration = ReservationDuration::find($id);

        $data = $request->validated();

        unset($data['reservation_type_id']);

        $duration->update($data);

        $duration->reservationType()->dissociate();
        $duration->reservationType()->associate($request->reservation_type_id);
        $duration->save();

        return $this->respond(
            'Reservation Duration Updated Successfully',
            fractal($duration, new ReservationDurationTransformer())
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
        $this->authorize('destroy', ReservationDuration::class);

        ReservationDuration::find($id)->delete();

        return $this->respond('Reservation Duration Deleted Successfully');
    }
}
