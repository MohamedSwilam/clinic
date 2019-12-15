<?php

namespace App\Http\Controllers;

use App\Http\Requests\MedicalReportRequest;
use App\IndexResponse;
use App\MedicalReport;
use App\Transformers\MedicalReportTransformer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MedicalReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('index', MedicalReport::class);

        return $this->respond(
            'Data Loaded Successfully',
            fractal(
                (new IndexResponse(MedicalReport::query()))->execute()
                , new MedicalReportTransformer()
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param MedicalReportRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(MedicalReportRequest $request)
    {
        $this->authorize('store', MedicalReport::class);

        $data = $request->validated();

        $medical_report = MedicalReport::create($data);

        return $this->respond(
            'Medical Report Created Successfully',
            fractal(
                MedicalReport::where('id', $medical_report->id)->first(),
                new MedicalReportTransformer()
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
        $this->authorize('show', MedicalReport::class);
        return $this->respond('fetched successfully', fractal(
                MedicalReport::where('id', $id)
                    ->first(),
                new MedicalReportTransformer()
            )
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param MedicalReportRequest $request
     * @param $id
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(MedicalReportRequest $request, $id)
    {
        $this->authorize('update', MedicalReport::class);

        MedicalReport::find($id)->update($request->validated());

        return $this->respond(
            'Medical Report Updated Successfully',
            fractal(
                MedicalReport::where('id' , $id)->first(),
                new MedicalReportTransformer()
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
        $this->authorize('destroy', MedicalReport::class);

        MedicalReport::find($id)->delete();

        return $this->respond('Medical Report Deleted Successfully');
    }
}
