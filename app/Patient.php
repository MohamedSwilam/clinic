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

    public function phones()
    {
        return $this->morphMany(Phone::class, 'phoneable');
    }

}
