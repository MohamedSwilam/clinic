<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    protected $fillable = ['country_code', 'number', 'type'];

    public function phoneable()
    {
        return $this->morphTo();
    }
}
