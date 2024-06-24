<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionController extends Controller
{
    // Roles
    public function index(Request $request)
    {
        // View Access
        if ($request->user()->cannot('view_role_permissions')) {
            abort(403);
        }

        $roles = Role::whereNot('name', 'admin')->latest()->paginate();

        return inertia('Dashboard/RolePermissions/Index', ['roles' => $roles, 'can' => [
            'view_role_permissions' => $request->user()->can('view_role_permissions'),
            'create_role_permissions' => $request->user()->can('create_role_permissions'),
            'edit_role_permissions' => $request->user()->can('edit_role_permissions'),
            'delete_role_permissions' => $request->user()->can('delete_role_permissions')
        ]]);
    }

    // Role permissions creation page
    public function create(Request $request)
    {
        // Create Access
        if ($request->user()->cannot('create_role_permissions')) {
            abort(403);
        }

        // Get all permissions based on group
        $permissions = Permission::all()->groupBy('group');

        return inertia('Dashboard/RolePermissions/Add', ['permissions' => $permissions]);
    }

    // Create role and permissions
    public function store(Request $request)
    {
        // Create Access
        if ($request->user()->cannot('create_role_permissions')) {
            abort(403);
        }

        // Validate request
        $request->validate([
            'name' => 'required|string|unique:roles,name',
            'permissions' => 'required|array|min:1',
            'permissions.*' => 'required|string|exists:permissions,name'
        ], [
            'permissions.required' => 'At least one permission is required'
        ]);

        // Create new role and assign permissions
        $role = Role::create(['name' => $request->input('name')]);
        $role->syncPermissions($request->input('permissions'));

        return redirect()->route('rolePermissions.index');
    }

    // Show role permissions
    public function show(Request $request, $role)
    {
        // Show Access
        if ($request->user()->cannot('edit_role_permissions')) {
            abort(403);
        }

        // Get the role
        $role = Role::findById($role);

        /**
         * Check if the requested role is admin
         * Don't allow displaying admin's permissions as admin has all the permissions by default
         */
        if ($role->name === 'admin') {
            abort(403);
        }

        // Get associated permissions of the role
        $rolePermissions = $role->permissions->pluck('name');

        // Get all permissions based on group
        $permissions = Permission::all()->groupBy('group');

        return inertia('Dashboard/RolePermissions/Permissions', ['role' => $role, 'rolePermissions' => $rolePermissions, 'permissions' => $permissions]);
    }

    // Update role permissions
    public function update(Request $request, $role)
    {
        // Edit Access
        if ($request->user()->cannot('edit_role_permissions')) {
            abort(403);
        }

        // Validate request
        $request->validate([
            'permissions' => 'required|array|min:1',
            'permissions.*' => 'required|string|exists:permissions,name'
        ], [
            'permissions.required' => 'At least one permission is required'
        ]);

        // Get the role
        $role = Role::findById($role);

        /**
         * Check if the requested role is admin
         * Don't allow edit on admin's permissions as changing permissions does not affect admin
         */
        if ($role->name === 'admin') {
            abort(403);
        }

        // Update permissions for the role
        $role->syncPermissions($request->input('permissions'));

        return redirect()->back();
    }

    // Delete role
    public function destroy(Request $request, $role)
    {
        // Show Access
        if ($request->user()->cannot('delete_role_permissions')) {
            abort(403);
        }

        // Get the role
        $role = Role::findById($role);

        /**
         * Check if the requested role is admin
         * Admin is not allowed to be deleted or self destroy
         */
        if ($role->name === 'admin') {
            abort(403);
        }

        // Delete the role
        $role->delete();

        return redirect()->back();
    }
}
