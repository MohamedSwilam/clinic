<?php

namespace App\Transformers;

use App\Patient;
use League\Fractal\TransformerAbstract;

class PatientTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @param Patient $patient
     * @return array
     */
    public function transform(Patient $patient)
    {
        return $patient->toArray();
    }
}
