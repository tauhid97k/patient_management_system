import { Head, Link, useForm } from "@inertiajs/react";
import { toast } from "sonner";

const AddRolePermissionsPage = ({ permissions }) => {
    const { setData, processing, errors, post, data } = useForm({
        name: "",
        permissions: [],
    });

    const handleCheckedPermissions = (e) => {
        const name = e.target.value;

        if (e.target.checked) {
            setData("permissions", [...data.permissions, name]);
        } else {
            setData(
                "permissions",
                data.permissions.filter((item) => {
                    return item !== name;
                })
            );
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("rolePermissions.store"), {
            onSuccess: () => toast.success("Role added"),
        });
    };

    return (
        <>
            <Head title="Add role and permissions" />
            <div className="flex items-center justify-between gap-4 mb-5">
                <h2 className="text-2xl font-medium">
                    Add Role and Permissions
                </h2>
                <Link
                    href={route("rolePermissions.index")}
                    className="btn btn-muted"
                >
                    Go back
                </Link>
            </div>

            <form onSubmit={handleSubmit}>
                <fieldset disabled={processing} className="disabled:opacity-70">
                    <div className="input-container">
                        <label htmlFor="name" className="input-label">
                            Role name
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {Object.keys(permissions).map((key) => (
                            <div key={key}>
                                <h2 className="text-2xl capitalize mb-2">
                                    {key.split("_").join(" ")}
                                </h2>
                                <div className="space-y-2">
                                    {permissions[key].map((permission) => (
                                        <label
                                            key={permission.id}
                                            className="w-fit flex items-center gap-x-2"
                                        >
                                            <input
                                                type="checkbox"
                                                name="permissions[]"
                                                value={permission.name}
                                                className="input-checkbox-contrast"
                                                onChange={
                                                    handleCheckedPermissions
                                                }
                                                checked={data.permissions.includes(
                                                    permission.name
                                                )}
                                            />
                                            <span className="first-letter:uppercase">
                                                {permission.name
                                                    .split("_")
                                                    .join(" ")}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-span-2 mt-6">
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                        {errors.permissions && (
                            <p className="input-error mt-4">
                                {errors.permissions}
                            </p>
                        )}
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default AddRolePermissionsPage;
