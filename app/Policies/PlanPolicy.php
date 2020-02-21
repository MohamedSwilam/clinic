<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PlanPolicy
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
        return request()->user()->hasPermissionTo('browse-plan');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-plan');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-plan');
    }
}
