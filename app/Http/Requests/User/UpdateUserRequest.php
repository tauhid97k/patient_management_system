<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'email' => ['required', 'email', 'string', Rule::unique('users', 'email')->ignore($this->user->id)],
            'password' => ['sometimes', 'string', 'min:8'],
            'role' => ['required', 'string', 'exists:roles,name', function ($attribute, $value, $fail) {
                if ($value === 'admin') {
                    $fail("The {$attribute} is invalid.");
                }
            }]
        ];
    }
}
