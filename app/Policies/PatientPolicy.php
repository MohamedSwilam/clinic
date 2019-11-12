<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PatientPolicy
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
        return request()->user()->hasPermissionTo('view-patient');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-patient');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-patient');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-patient');
    }
}
