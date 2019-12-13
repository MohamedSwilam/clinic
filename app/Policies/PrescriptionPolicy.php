<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PrescriptionPolicy
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
        return request()->user()->hasPermissionTo('browse-prescription');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-prescription');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-prescription');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-prescription');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-prescription');
    }
}
