<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;

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
});
