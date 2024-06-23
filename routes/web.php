<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\RolePermissionController;
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
Route::prefix('dashboard')->middleware(['auth'])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    // Role Permissions
    Route::get('/role-permissions/create', [RolePermissionController::class, 'create'])->name('rolePermissions.create');
    Route::post('/role-permissions', [RolePermissionController::class, 'store'])->name('rolePermissions.store');
    Route::get('/role-permissions', [RolePermissionController::class, 'index'])->name('rolePermissions.index');
    Route::get('/role-permissions/{role}/permissions', [RolePermissionController::class, 'show'])->name('rolePermissions.show');
    Route::put('/role-permissions/{role}/permissions', [RolePermissionController::class, 'update'])->name('rolePermissions.update');
    Route::delete('/role-permissions/{role}', [RolePermissionController::class, 'destroy'])->name('rolePermissions.destroy');


    // Patients
    Route::resource('/patients', PatientController::class);
    // Users
    Route::resource('/users', UserController::class);
});
