<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReservationPolicy
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
        return request()->user()->hasPermissionTo('view-reservation');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-reservation');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-reservation');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-reservation');
    }
}
