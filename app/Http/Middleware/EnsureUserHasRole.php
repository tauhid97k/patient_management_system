<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserHasRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->user()) {
            if ($request->user()->getRoleNames()->count()) {
                return $next($request);
            } else {
                Auth::guard('web')->logout();

                $request->session()->invalidate();
                $request->session()->regenerateToken();

                // Return a custom validation response
                $validator = Validator::make([], []);
                $validator->errors()->add('role', 'Access denied. Please contact administrator');

                return redirect()->route('login.view')->withErrors($validator);
            }
        }

        return $next($request);
    }
}
