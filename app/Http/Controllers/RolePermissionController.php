<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionController extends Controller
{
    // Roles
    public function index()
    {
        $roles = Role::latest()->paginate();

        return inertia('Dashboard/RolePermissions/Index', ['roles' => $roles]);
    }

    // Show role permissions
    public function show($role)
    {
        // Get role and associated permissions
        $role = Role::findById($role);
        $rolePermissions = $role->permissions->pluck('name');

        // Get all permissions based on group
        $permissions = Permission::all()->groupBy('group');

        return inertia('Dashboard/RolePermissions/Permissions', ['role' => $role, 'rolePermissions' => $rolePermissions, 'permissions' => $permissions]);
    }

    // Update role permissions
    public function update(Request $request, $role)
    {

        $request->validate([
            'permissions' => 'required|array|min:1',
            'permissions.*' => 'required|string|exists:permissions,name'
        ], [
            'permissions.required' => 'At least one permission is required'
        ]);

        $role = Role::findById($role);
        $role->syncPermissions($request->permissions);

        return redirect()->back();
    }
}
