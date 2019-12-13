<?php

namespace App\Http\Controllers;

use App\Http\Requests\PaymentRequest;
use App\IndexResponse;
use App\Payment;
use App\Transformers\PaymentTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Payment::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(Payment::query()))->execute()
                , new PaymentTransformer()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PaymentRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(PaymentRequest $request)
    {
        $this->authorize('store', Payment::class);

        $data = $request->validated();

        $payment = Payment::create($data);

        return $this->respond(
            'Payment Created Successfully',
            fractal(
                Payment::where('id', $payment->id)->first(),
                new PaymentTransformer()
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
        $this->authorize('show', Payment::class);

        return $this->respond('fetched successfully', fractal(
                Payment::where('id', $id)
                    ->first(),
                new PaymentTransformer()
            )
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PaymentRequest $request
     * @param $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(PaymentRequest $request, $id)
    {
        $this->authorize('update', Payment::class);

        $payment = Payment::find($id);

        $data = $request->validated();

        $payment->update($data);

        return $this->respond(
            'Payment Updated Successfully',
            fractal(
                Payment::where('id' , $payment->id)->first(),
                new PaymentTransformer()
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
        $this->authorize('destroy', Payment::class);

        Payment::find($id)->delete();

        return $this->respond('Payment Deleted Successfully');
    }
}
