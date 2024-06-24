<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class DashboardController extends Controller
{
    public function index()
    {
        $userCount = User::count();
        $patientCount = Patient::count();
        $rolesCount = Role::count();

        return inertia('Dashboard/Overview', ['data' => [
            'users' => $userCount,
            'patients' => $patientCount,
            'roles' => $rolesCount
        ]]);
    }
}
