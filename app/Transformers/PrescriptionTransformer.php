<?php

namespace App\Transformers;

use App\Prescription;
use League\Fractal\TransformerAbstract;

class PrescriptionTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @param Prescription $prescription
     * @return array
     */
    public function transform(Prescription $prescription)
    {
        return $prescription->toArray();
    }
}
