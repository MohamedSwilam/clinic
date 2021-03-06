<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReservationDuration extends Model
{
    protected $with = ['reservationType'];
    protected $fillable = ['date', 'start_time', 'end_time', 'counter', 'room', 'reservation_type_id'];

    public function reservationType()
    {
        return $this->belongsTo(ReservationType::class, 'reservation_type_id');
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function scopeDate($query, $date)
    {
        return $query->where('date', $date);
    }

    public function scopeReservationType($query, $id)
    {
        $query->whereHas('reservationType', function ($query) use ($id) {
            $query->where('id', $id);
        });
    }

    public function decrementCounter()
    {
        $this->counter--;
        $this->save();
    }

    public function incrementCounter()
    {
        $this->counter++;
        $this->save();
    }
}
