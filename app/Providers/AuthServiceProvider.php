<?php

namespace App\Providers;

use App\Appointment;
use App\MedicalReport;
use App\Patient;
use App\Payment;
use App\Policies\EmployeePolicy;
use App\Policies\MedicalReportPolicy;
use App\Policies\PatientPolicy;
use App\Policies\PaymentPolicy;
use App\Policies\PermissionPolicy;
use App\Policies\PrescriptionPolicy;
use App\Policies\ReservationPolicy;
use App\Policies\ReservationTypePolicy;
use App\Policies\RolePolicy;
use App\Prescription;
use App\ReservationDuration;
use App\ReservationType;
use App\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
        User::class => EmployeePolicy::class,
        Role::class => RolePolicy::class,
        Permission::class => PermissionPolicy::class,
        Patient::class => PatientPolicy::class,
        ReservationType::class => ReservationPolicy::class,
        ReservationDuration::class => ReservationPolicy::class,
        Appointment::class => ReservationPolicy::class,
        Payment::class => PaymentPolicy::class,
        Prescription::class => PrescriptionPolicy::class,
        MedicalReport::class => MedicalReportPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();
    }
}
