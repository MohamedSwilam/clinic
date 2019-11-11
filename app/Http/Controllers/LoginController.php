<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\Passport;
use League\OAuth2\Server\CryptKey;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $login_credentials = $request->validated();

        if (!Auth::attempt($login_credentials)){
            return $this->respond('incorrect email or password', [], 401);
        }

        $user = $request->user();

        return $this->respond("login credentials correct", [
            'user' => $user,
            'access_token' => $user->createToken('token')->accessToken,
            'token_type' => 'Bearer',
        ], 200);
    }
}
