<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Patient\StorePatientRequest;
use App\Http\Requests\Patient\UpdatePatientRequest;
use App\Models\Patient;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // View Access
        if ($request->user()->cannot('view_patients')) {
            abort(403);
        }

        $patients = Patient::query()->when($request->input('search'), function ($query, $search) {
            $query->where('name', 'like', "%{$search}%");
        })->orderBy('created_at', 'DESC')->paginate()->withQueryString();

        return inertia('Dashboard/Patients/Index', ['patients' => $patients, 'filters' => $request->only('search'), 'can' => [
            'view_patients' => $request->user()->can('view_patients'),
            'show_patient' => $request->user()->can('show_patient'),
            'create_patient' => $request->user()->can('create_patient'),
            'edit_patient' => $request->user()->can('edit_patient'),
            'delete_patient' => $request->user()->can('delete_patient')
        ]]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        // Create Access
        if ($request->user()->cannot('create_patient')) {
            abort(403);
        }

        return inertia('Dashboard/Patients/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePatientRequest $request)
    {
        // Create Access
        if ($request->user()->cannot('create_patient')) {
            abort(403);
        }

        Patient::create($request->validated());

        return redirect(route('patients.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Patient $patient)
    {
        // Show Access
        if ($request->user()->cannot('show_patient')) {
            abort(403);
        }

        $patient = Patient::findOrFail($patient->id);
        $records = $patient->records()->latest()->paginate();
        return inertia('Dashboard/Patients/Show', ['patient' => $patient, 'records' => $records]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Patient $patient)
    {
        // Edit Access
        if ($request->user()->cannot('edit_patient')) {
            abort(403);
        }

        $patient = Patient::findOrFail($patient->id);
        return inertia('Dashboard/Patients/Edit', ['patient' => $patient]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePatientRequest $request, Patient $patient)
    {
        // Edit Access
        if ($request->user()->cannot('edit_patient')) {
            abort(403);
        }

        $patient = Patient::findOrFail($patient->id);
        $patient->update($request->validated());

        return redirect()->route('patients.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Patient $patient)
    {
        // Delete Access
        if ($request->user()->cannot('delete_patient')) {
            abort(403);
        }

        $patient->delete();

        return redirect()->back();
    }
}
