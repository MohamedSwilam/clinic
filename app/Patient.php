<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Patient extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'birth_date', 'email', 'address', 'city',
        'country', 'gender', 'occupation', 'reference'
    ];

    protected $with = ['phones'];

    public function phones()
    {
        return $this->morphMany(Phone::class, 'phoneable');
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }

    public function scopePaymentStatistics($query)
    {
        $query->withCount([
            'payments AS payments_total' => function ($query) {
                $query->select(DB::raw("SUM(to_be_paid) as paid"));
            },
            'payments AS remaining_payments' => function ($query) {
                $query->select(DB::raw("SUM(to_be_paid - paid) as paid"));
            },
        ]);
    }

}
