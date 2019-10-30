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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::middleware('cors')->group(function(){
    
    Route::get('users', 'UserController@list');
    Route::get('users/{id}', 'UserController@detail');
    Route::put('users', 'UserController@create');
    Route::post('users/{id}', 'UserController@update');
    Route::delete('users/{id}', 'UserController@delete');
    
});


