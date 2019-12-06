<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{

    protected $with = ['patient', 'reservationType', 'reservationDuration', 'doctor', 'receptionist'];

    protected $fillable = ['status', 'illness_description', 'patient_id', 'reservation_type_id', 'reservation_duration_id', 'doctor_id', 'receptionist_id'];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function reservationType()
    {
        return $this->belongsTo(ReservationType::class, 'reservation_type_id');
    }

    public function reservationDuration()
    {
        return $this->belongsTo(ReservationDuration::class, 'reservation_duration_id');
    }

    public function doctor()
    {
        return $this->belongsTo(User::class, 'doctor_id');
    }

    public function receptionist()
    {
        return $this->belongsTo(User::class, 'receptionist_id');
    }

    public function scopeReceptionist($query, $id)
    {
        return $query->where('receptionist_id', $id);
    }

    public function scopeDoctor($query, $id)
    {
        return $query->where('doctor_id', $id);
    }

    public function scopePatient($query, $id)
    {
        return $query->where('patient_id', $id);
    }
}
