<?php

namespace App\Transformers;

use App\ReservationDuration;
use League\Fractal\TransformerAbstract;

class ReservationDurationTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @param ReservationDuration $duration
     * @return array
     */
    public function transform(ReservationDuration $duration)
    {
        return $duration->toArray();
    }
}
