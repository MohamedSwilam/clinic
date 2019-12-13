<?php

namespace App\Transformers;

use App\Payment;
use League\Fractal\TransformerAbstract;

class PaymentTransformer extends TransformerAbstract
{
    /**
     * A Fractal transformer.
     *
     * @param Payment $payment
     * @return array
     */
    public function transform(Payment $payment)
    {
        return $payment->toArray();
    }
}
