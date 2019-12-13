<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prescription extends Model
{
    protected $with = ['patient', 'creator'];

    protected $fillable = ['description', 'creator_id', 'patient_id'];

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}
