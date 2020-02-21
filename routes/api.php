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

Route::post('login', 'LoginController@login');

Route::group(['prefix' => 'employee', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'EmployeeController@update');
    Route::get('{id}', 'EmployeeController@show');
    Route::delete('{id}', 'EmployeeController@destroy');
    Route::resource('', 'EmployeeController');
});

Route::group(['prefix' => 'role', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'RoleController@update');
    Route::get('{id}', 'RoleController@show');
    Route::delete('{id}', 'RoleController@destroy');
    Route::resource('', 'RoleController');
});

Route::middleware('auth:api')->get('permission', 'PermissionController@index');

Route::group(['prefix' => 'patient', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'PatientController@update');
    Route::get('{id}', 'PatientController@show');
    Route::delete('{id}', 'PatientController@destroy');
    Route::resource('', 'PatientController');
});

Route::group(['prefix' => 'reservation-type', 'middleware' => 'auth:api'], function () {
    Route::get('{id}', 'ReservationTypeController@show');
    Route::post('{id}', 'ReservationTypeController@update');
    Route::delete('{id}', 'ReservationTypeController@destroy');
    Route::resource('', 'ReservationTypeController');
});

Route::group(['prefix' => 'reservation-duration', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'ReservationDurationController@update');
    Route::delete('{id}', 'ReservationDurationController@destroy');
    Route::resource('', 'ReservationDurationController');
});

Route::group(['prefix' => 'appointment', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'AppointmentController@update');
    Route::get('{id}', 'AppointmentController@show');
    Route::delete('{id}', 'AppointmentController@destroy');
    Route::resource('', 'AppointmentController');
});

Route::middleware('auth:api')->resource('phone', 'PhoneController');

Route::group(['prefix' => 'payment', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'PaymentController@update');
    Route::get('{id}', 'PaymentController@show');
    Route::delete('{id}', 'PaymentController@destroy');
    Route::resource('', 'PaymentController');
});

Route::group(['prefix' => 'prescription', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'PrescriptionController@update');
    Route::get('{id}', 'PrescriptionController@show');
    Route::delete('{id}', 'PrescriptionController@destroy');
    Route::resource('', 'PrescriptionController');
});

Route::group(['prefix' => 'plan', 'middleware' => 'auth:api'], function () {
    Route::delete('{id}', 'PlanController@destroy');
    Route::resource('', 'PlanController');
});

Route::group(['prefix' => 'medical-report', 'middleware' => 'auth:api'], function () {
    Route::post('{id}', 'MedicalReportController@update');
    Route::get('{id}', 'MedicalReportController@show');
    Route::delete('{id}', 'MedicalReportController@destroy');
    Route::resource('', 'MedicalReportController');
});

Route::group(['prefix' => 'notification', 'middleware' => 'auth:api'], function () {
    Route::get('{user_id}', 'NotificationController@index');
    Route::get('read/{user_id}', 'NotificationController@readIndex');
    Route::get('unread/{user_id}', 'NotificationController@unreadIndex');
    Route::post('{user_id}', 'NotificationController@markAll');
});

