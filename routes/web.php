<?php

use Illuminate\Support\Facades\Route;

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


Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/concept', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/menu', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/style', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/info', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/reserve', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
// Route::get('/{any?}', fn () => view('home'))->where('any', '.+');

Auth::routes();
