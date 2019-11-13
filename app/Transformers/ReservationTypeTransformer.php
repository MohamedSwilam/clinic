<?php

namespace App\Transformers;

use App\ReservationType;
use League\Fractal\TransformerAbstract;

class ReservationTypeTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @param ReservationType $type
     * @return array
     */
    public function transform(ReservationType $type)
    {
        return $type->toArray();
    }
}
