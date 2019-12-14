<?php

namespace App\Http\Controllers;

use App\Http\Requests\PrescriptionRequest;
use App\IndexResponse;
use App\Patient;
use App\Prescription;
use App\Transformers\PrescriptionTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PrescriptionController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Prescription::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(Prescription::query()))->execute(),
                new PrescriptionTransformer()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PrescriptionRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(PrescriptionRequest $request)
    {
        $this->authorize('store', Prescription::class);

        $data = $request->validated();

        $prescription = Prescription::create($data);

        return $this->respond(
            'Prescription Created Successfully',
            fractal(
                Prescription::where('id', $prescription->id)->get(),
                new PrescriptionTransformer()
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
        $this->authorize('show', Prescription::class);
        return $this->respond('fetched successfully', fractal(
                Prescription::where('id', $id)
                    ->first(),
                new Prescription()
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
    public function update(PrescriptionRequest $request, $id)
    {
        $this->authorize('update', Prescription::class);

        $prescription = Prescription::find($id);

        $prescription->update($request->validated());

        return $this->respond(
            'Prescription Updated Successfully',
            fractal(Prescription::where('id', $id)->get(), new PrescriptionTransformer())
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
        $this->authorize('destroy', Prescription::class);

        Prescription::find($id)->delete();

        return $this->respond('Prescription Deleted Successfully');
    }
}
