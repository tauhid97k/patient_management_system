<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Patient>
 */
class PatientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $gender = fake()->randomElement(['male', 'female']);
        return [
            'name' => fake()->name($gender),
            'gender' => $gender,
            'age' => rand(15, 70),
            'blood_group' => fake()->randomElement(['a_positive', 'a_negative', 'b_positive', 'b_negative', 'ab_positive', 'ab_negative', 'o_positive', 'o_negative']),
            'marital_status' => fake()->randomElement(['married', 'unmarried']),
            'phone' => fake()->phoneNumber(),
            'address' => fake()->address()
        ];
    }
}
