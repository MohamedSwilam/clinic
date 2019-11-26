<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReservationDuration extends Model
{
    protected $fillable = ['date', 'start_time', 'end_time', 'counter', 'reservation_type_id'];

    public function reservationType()
    {
        return $this->belongsTo(ReservationType::class, 'reservation_type_id');
    }
}