<?php

use Illuminate\Http\Request;

Route::namespace('Api')->group(function(){
    Route::resource('post','PostController')->except('create','edit');
});


