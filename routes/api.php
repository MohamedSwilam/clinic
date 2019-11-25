<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::middleware('auth:api')->resource('users', 'UserController');

Route::post('login', 'loginController@login');

Route::group(['prefix' => 'employee', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'EmployeeController@update');
    Route::delete('{id}', 'EmployeeController@destroy');
    Route::resource('', 'EmployeeController');
});

Route::group(['prefix' => 'role', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'RoleController@update');
    Route::delete('{id}', 'RoleController@destroy');
    Route::resource('', 'RoleController');
});

Route::middleware('auth:api')->get('permission', 'PermissionController@index');

Route::group(['prefix' => 'patient', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'PatientController@update');
    Route::delete('{id}', 'PatientController@destroy');
    Route::resource('', 'PatientController');
});

Route::group(['prefix' => 'reservation-type', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'ReservationTypeController@update');
    Route::delete('{id}', 'ReservationTypeController@destroy');
    Route::resource('', 'ReservationTypeController');
});

Route::group(['prefix' => 'reservation-duration', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'ReservationDurationController@update');
    Route::delete('{id}', 'ReservationDurationController@destroy');
    Route::resource('', 'ReservationDurationController');
});
