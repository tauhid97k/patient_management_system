<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return inertia('Home');
});

// Public Routes
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'view'])->name('login.view');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
});

// Private Routes
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::resource('/patients', PatientController::class);
    Route::resource('/users', UserController::class);
});
