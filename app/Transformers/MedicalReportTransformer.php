<?php

namespace App\Transformers;

use App\MedicalReport;
use League\Fractal\TransformerAbstract;

class MedicalReportTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @param MedicalReport $medicalReport
     * @return array
     */
    public function transform(MedicalReport $medicalReport)
    {
        return $medicalReport->toArray();
    }
}
