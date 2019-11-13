<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReservationType extends Model
{
    protected $fillable = ['name', 'online_reservation', 'min_price', 'max_price'];
}
