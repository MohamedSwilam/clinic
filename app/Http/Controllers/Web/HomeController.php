<?php


namespace App\Http\Controllers\Web;


use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    public function indexEn()
    {
        return view('en-website', [
            'employees' => \App\User::where('view_in_website', true)->get(),
        ]);
    }

    public function indexAr()
    {
        return view('ar-website', [
            'employees' => \App\User::where('view_in_website', true)->get(),
        ]);
    }
}
