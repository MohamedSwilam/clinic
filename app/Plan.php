<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $with = ['patient', 'creator'];

    protected $fillable = ['plan', 'number', 'cost', 'creator_id', 'patient_id'];

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
