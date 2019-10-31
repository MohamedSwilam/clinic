<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $this->authorize('index', User::class);

        return $this->respond('Data Loaded Successfully', User::employees()->get());
    }
}
