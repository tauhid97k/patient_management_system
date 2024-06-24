import { Head, Link, useForm } from "@inertiajs/react";
import { toast } from "sonner";

const AddUserPage = ({ roles }) => {
    const { setData, processing, errors, post } = useForm({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("users.store"), {
            onSuccess: () => toast.success("User added"),
        });
    };

    return (
        <>
            <Head title="Add User" />
            <div className="flex items-center justify-between gap-4 mb-5">
                <h2 className="text-2xl font-medium">Add User</h2>
                <Link href={route("users.index")} className="btn btn-muted">
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
                        />
                        {errors.name && (
                            <p className="input-error">{errors.name}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="email" className="input-label">
                            Email
                        </label>
                        <input
                            onChange={(e) => setData("email", e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            className="input-contrast"
                        />
                        {errors.email && (
                            <p className="input-error">{errors.email}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password" className="input-label">
                            Password
                        </label>
                        <input
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type="password"
                            id="password"
                            name="password"
                            className="input-contrast"
                        />
                        {errors.password && (
                            <p className="input-error">{errors.password}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="role" className="input-label">
                            Role
                        </label>
                        <select
                            onChange={(e) => setData("role", e.target.value)}
                            id="role"
                            name="role"
                            className="input-contrast capitalize"
                        >
                            <option value="" disabled>
                                Select role
                            </option>
                            {roles.map((role) => (
                                <option key={role.id} value={role.name}>
                                    {role.name}
                                </option>
                            ))}
                        </select>
                        {errors.role && (
                            <p className="input-error">{errors.role}</p>
                        )}
                    </div>
                    <div className="col-span-2 mt-2">
                        <button
                            type="submit"
                            className="btn btn-primary ms-auto"
                        >
                            Add User
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default AddUserPage;
