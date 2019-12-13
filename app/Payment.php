<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = ['description', 'to_be_paid', 'paid', 'appointment_id', 'patient_id'];

    public function appointment()
    {
        return $this->belongsTo(Appointment::class, 'appointment_id');
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }
}

