<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

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

}
