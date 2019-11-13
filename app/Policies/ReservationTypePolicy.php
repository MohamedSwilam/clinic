<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReservationTypePolicy
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
        return request()->user()->hasPermissionTo('view-reservation-type');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-reservation-type');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-reservation-type');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-reservation-type');
    }
}
