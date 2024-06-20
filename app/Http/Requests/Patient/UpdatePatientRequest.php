<?php

namespace App\Http\Requests\Patient;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePatientRequest extends FormRequest
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
            'name' => 'required|string',
            'gender' => 'required|string|in:male,female,other',
            'age' => 'required|numeric|gt:0',
            'blood_group' => 'required|string|in:a_positive,a_negative,b_positive,b_negative,ab_positive,ab_negative,o_positive,o_negative',
            'marital_status' => 'required|string|in:married,unmarried',
            'phone' => 'required|string',
            'address' => 'required|string',
            'note' => 'nullable'
        ];
    }
}
