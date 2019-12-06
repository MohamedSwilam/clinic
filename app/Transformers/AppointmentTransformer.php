<?php

namespace App\Transformers;

use App\Appointment;
use League\Fractal\TransformerAbstract;

class AppointmentTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @param Appointment $appointment
     * @return array
     */
    public function transform(Appointment $appointment)
    {
        return $appointment->toArray();
    }
}
