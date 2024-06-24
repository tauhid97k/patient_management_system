import { Head, Link, useForm } from "@inertiajs/react";
import { toast } from "sonner";

const EditPatientPage = ({ patient }) => {
    const { setData, processing, errors, put } = useForm({
        name: patient.name,
        age: patient.age,
        gender: patient.gender,
        blood_group: patient.blood_group,
        marital_status: patient.marital_status,
        phone: patient.phone,
        address: patient.address,
        note: patient.note,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("patients.update", { patient: patient.id }), {
            onSuccess: () => toast.success("Patient updated"),
        });
    };

    return (
        <>
            <Head title="Edit Patient" />
            <div className="flex items-center justify-between gap-4 mb-5">
                <h2 className="text-2xl font-medium">Edit Patient</h2>
                <Link href={route("patients.index")} className="btn btn-muted">
                    Go back
                </Link>
            </div>

            <form onSubmit={handleSubmit} autoComplete="off">
                <fieldset
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-5 disabled:opacity-70"
                    disabled={processing}
                >
                    <div className="input-container">
                        <label htmlFor="name" className="input-label">
                            Name
                        </label>
                        <input
                            onChange={(e) => setData("name", e.target.value)}
                            type="text"
                            id="name"
                            name="name"
                            className="input-contrast"
                            defaultValue={patient.name}
                        />
                        {errors.name && (
                            <p className="input-error">{errors.name}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="age" className="input-label">
                            Age
                        </label>
                        <input
                            onChange={(e) => setData("age", e.target.value)}
                            type="number"
                            id="age"
                            name="age"
                            className="input-contrast"
                            defaultValue={patient.age}
                        />
                        {errors.age && (
                            <p className="input-error">{errors.age}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="gender" className="input-label">
                            Gender
                        </label>
                        <select
                            onChange={(e) => setData("gender", e.target.value)}
                            id="gender"
                            name="gender"
                            className="input-contrast"
                            defaultValue={patient.gender}
                        >
                            <option value="" disabled>
                                Select gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && (
                            <p className="input-error">{errors.gender}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="blood_group" className="input-label">
                            Blood Group
                        </label>
                        <select
                            onChange={(e) =>
                                setData("blood_group", e.target.value)
                            }
                            id="blood_group"
                            name="blood_group"
                            className="input-contrast"
                            defaultValue={patient.blood_group}
                        >
                            <option value="" disabled>
                                Select blood group
                            </option>
                            <option value="a_positive">A Positive</option>
                            <option value="a_negative">A Negative</option>
                            <option value="b_positive">B Positive</option>
                            <option value="b_negative">B Negative</option>
                            <option value="ab_positive">AB Positive</option>
                            <option value="ab_negative">AB Negative</option>
                            <option value="o_positive">O Positive</option>
                            <option value="o_negative">O Negative</option>
                        </select>
                        {errors.blood_group && (
                            <p className="input-error">{errors.blood_group}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="marital_status" className="input-label">
                            Marital Status
                        </label>
                        <select
                            onChange={(e) =>
                                setData("marital_status", e.target.value)
                            }
                            id="marital_status"
                            name="marital_status"
                            className="input-contrast"
                            defaultValue={patient.marital_status}
                        >
                            <option value="" disabled>
                                Select marital status
                            </option>
                            <option value="married">Married</option>
                            <option value="unmarried">Unmarried</option>
                        </select>
                        {errors.marital_status && (
                            <p className="input-error">
                                {errors.marital_status}
                            </p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="phone" className="input-label">
                            Phone
                        </label>
                        <input
                            onChange={(e) => setData("phone", e.target.value)}
                            type="text"
                            id="phone"
                            name="phone"
                            className="input-contrast"
                            defaultValue={patient.phone}
                        />
                        {errors.phone && (
                            <p className="input-error">{errors.phone}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="address" className="input-label">
                            Address
                        </label>
                        <textarea
                            onChange={(e) => setData("address", e.target.value)}
                            id="address"
                            name="address"
                            className="input-contrast"
                            defaultValue={patient.address}
                            rows={2}
                        ></textarea>
                        {errors.address && (
                            <p className="input-error">{errors.address}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label
                            htmlFor="note"
                            className="flex gap-1 items-center input-label"
                        >
                            <span>Note</span>
                            <span className="text-sm text-zinc-500">
                                (Optional)
                            </span>
                        </label>
                        <textarea
                            onChange={(e) => setData("note", e.target.value)}
                            id="note"
                            name="note"
                            className="input-contrast"
                            defaultValue={patient.note}
                            rows={2}
                        ></textarea>
                    </div>
                    <div className="col-span-2 mt-2">
                        <button
                            type="submit"
                            className="btn btn-primary ms-auto"
                        >
                            Update Patient
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default EditPatientPage;
