<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionController extends Controller
{
    // Role and their permissions
    public function rolePermissions(Request $request)
    {
        $roles = Role::select('id', 'name')->get();
        $permissions = Permission::select('id', 'name', 'group')->get()->groupBy('group');

        return inertia('Dashboard/RolePermissions/Index', ['roles' => $roles, 'permissions' => $permissions]);
    }
}
