<?php

namespace App\Providers;

use App\Patient;
use App\Policies\EmployeePolicy;
use App\Policies\PatientPolicy;
use App\Policies\PermissionPolicy;
use App\Policies\RolePolicy;
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
