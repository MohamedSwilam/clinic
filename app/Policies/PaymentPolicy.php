<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PaymentPolicy
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
        return request()->user()->hasPermissionTo('browse-payment');
    }

    public function store()
    {
        return request()->user()->hasPermissionTo('create-payment');
    }

    public function show()
    {
        return request()->user()->hasPermissionTo('view-payment');
    }

    public function update()
    {
        return request()->user()->hasPermissionTo('edit-payment');
    }

    public function destroy()
    {
        return request()->user()->hasPermissionTo('delete-payment');
    }
}
