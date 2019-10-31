<?php

namespace App\Policies;

use App\User;
use http\Env\Request;
use Illuminate\Auth\Access\HandlesAuthorization;

class EmployeePolicy
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
        return request()->user()->hasAnyRole(['super_admin', 'admin']);
    }
}
