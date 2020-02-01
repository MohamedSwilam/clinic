<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('test','test');

Route::get('/', 'Web\HomeController@indexEn')->name('welcome');
Route::get('/en', 'Web\HomeController@indexEn')->name('welcome-en');
Route::get('/ar', 'Web\HomeController@indexAr')->name('welcome-ar');
Route::get('/dashboard', 'ApplicationController')->where('any', '.*');
Route::get('/dashboard/{any}', 'ApplicationController')->where('any', '.*');
