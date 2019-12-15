<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MedicalReportPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index()
    {
        return request()->user()->hasPermissionTo('browse-medical-report');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-medical-report');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-medical-report');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-medical-report');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-medical-report');
    }
}
