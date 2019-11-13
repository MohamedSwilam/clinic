<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReservationTypeRequest;
use App\IndexResponse;
use App\ReservationType;
use App\Transformers\ReservationTypeTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReservationTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', ReservationType::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(ReservationType::query()))->execute(),
                new ReservationTypeTransformer()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ReservationTypeRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(ReservationTypeRequest $request)
    {

        $this->authorize('store', ReservationType::class);

        return $this->respond(
            'Reservation Type Created Successfully',
            fractal(
                ReservationType::create($request->validated()),
                new ReservationTypeTransformer()
            )
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ReservationTypeRequest $request
     * @param $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(ReservationTypeRequest $request, $id)
    {
        $this->authorize('update', ReservationType::class);

        $type = ReservationType::find($id);

        $type->update($request->validated());

        return $this->respond(
            'Reservation Type Updated Successfully',
            fractal($type, new ReservationTypeTransformer())
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

        $this->authorize('destroy', ReservationType::class);

        ReservationType::find($id)->delete();

        return $this->respond('Reservation Type Deleted Successfully');
    }
}
