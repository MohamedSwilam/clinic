<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MedicalReport extends Model
{
    protected $with = ['patient', 'doctor'];
    protected $fillable = ['chief_complain','onset_date','onset_manner','duration','severity','factors','associated_symptoms',
        'examination','oral_examination','extra_oral_examination','special_test','diagnosis','treatment_plan','patient_id',
        'doctor_id'];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function doctor()
    {
        return $this->belongsTo(User::class, 'doctor_id');
    }

    public function scopeDoctor($query, $id)
    {
        $query->where('doctor_id', $id);
    }

    public function scopePatient($query, $id)
    {
        $query->where('patient_id', $id);
    }
}
