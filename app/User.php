<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'birth_date', 'email', 'password', 'address', 'city', 'country', 'phone', 'gender', 'image', 'email_verified_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $with = ['phones'];

    public function scopeName($query, $name)
    {
        $query->where('name', $name);
    }

    public function scopeEmployees($query)
    {
        return $query->whereHas('roles', function ($query) {
            $query->whereIn('name', ['doctor', 'receptionist', 'assistant_doctor', 'accountant', 'admin']);
        });
    }

    public function scopeDoctor($query)
    {
        return $query->whereHas('roles', function ($query) {
            $query->where('name', 'doctor');
        });
    }

    public function phones()
    {
        return $this->morphMany(Phone::class, 'phoneable');
    }

    public function assignedAppointments()
    {
        return $this->hasMany(Appointment::class, 'doctor_id');
    }

    public function reservedAppointments()
    {
        return $this->hasMany(Appointment::class, 'receptionist_id');
    }

    public function prescriptions()
    {
        return $this->hasMany(Prescription::class, 'creator_id');
    }

}
