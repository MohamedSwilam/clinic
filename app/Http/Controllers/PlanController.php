<?php

namespace App\Http\Controllers;

use App\Http\Requests\PlanRequest;
use App\IndexResponse;
use App\Plan;
use App\Transformers\PlanTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', Plan::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(Plan::query()))->execute(),
                new PlanTransformer()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PlanRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(PlanRequest $request)
    {
        $this->authorize('store', Plan::class);

        $data = $request->validated();

        $plan = Plan::create($data);

        return $this->respond(
            'Plan Created Successfully',
            fractal(
                Plan::where('id', $plan->id)->get(),
                new PlanTransformer()
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
        $this->authorize('destroy', Plan::class);

        Plan::find($id)->delete();

        return $this->respond('Plan Deleted Successfully');
    }
}
