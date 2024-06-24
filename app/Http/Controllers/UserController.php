<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Get users with roles and search filter
        $users = User::query()->when($request->input('search'), function ($query, $search) {
            $query->where('name', 'like', "%{$search}%");
        })->whereDoesntHave('roles', function ($query) {
            $query->where('name', 'admin');
        })->with('roles')->orderBy('created_at', 'DESC')->paginate()->withQueryString();

        // Transform response
        $users->getCollection()->transform(function ($user) {
            $user->role = $user->roles->pluck('name')->first() ?: null;
            unset($user->roles);
            return $user;
        });

        return inertia('Dashboard/Users/Index', ['users' => $users, 'filters' => $request->only('search')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Get roles
        $roles = Role::whereNot('name', 'admin')->select('id', 'name')->get();

        return inertia('Dashboard/Users/Add', ['roles' => $roles]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $user = User::create($request->validated());

        // Assign role
        $user->assignRole($request->input('role'));

        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        // Get roles
        $roles = Role::whereNot('name', 'admin')->select('id', 'name')->get();

        // Get user with role
        $user = User::with('roles')->findOrFail($user->id);
        $user->role = $user->roles->isEmpty() ? null : $user->roles->first()->name;
        unset($user->roles);

        return inertia('Dashboard/Users/Edit', ['user' => $user, 'roles' => $roles]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $user = User::findOrFail($user->id);
        $user->update($request->validated());

        // Assign/Update role
        if ($request->filled('role')) {
            $user->syncRoles([$request->input('role')]);
        }

        return redirect()->route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->back();
    }
}
