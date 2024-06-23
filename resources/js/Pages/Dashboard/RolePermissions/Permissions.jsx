import { useForm, Link, Head } from "@inertiajs/react";
import { toast } from "sonner";

const PermissionsPage = ({ role, rolePermissions, permissions }) => {
    const { processing, errors, setData, put, data } = useForm({
        permissions: rolePermissions,
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

        put(route("rolePermissions.update", { id: role.id }), {
            onSuccess: () => toast.success("Permissions updated"),
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Permissions" />
            <div className="flex items-center justify-between gap-4 mb-5">
                <h2 className="text-2xl font-medium">Permissions</h2>
                <Link
                    href={route("rolePermissions.index")}
                    className="btn btn-muted"
                >
                    Go back
                </Link>
            </div>
            <div className="card-contrast">
                <div className="card-header">{role.name} Permissions</div>
                <div className="p-6">
                    <form onSubmit={handleSubmit}>
                        <fieldset
                            disabled={processing}
                            className="disabled:opacity-70"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {Object.keys(permissions).map((key) => (
                                    <div key={key}>
                                        <h2 className="text-2xl capitalize mb-2">
                                            {key.split("_").join(" ")}
                                        </h2>
                                        <div className="space-y-2">
                                            {permissions[key].map(
                                                (permission) => (
                                                    <label
                                                        key={permission.id}
                                                        className="w-fit flex items-center gap-x-2"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            name="permissions[]"
                                                            value={
                                                                permission.name
                                                            }
                                                            className="input-checkbox"
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
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-span-2 mt-6">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Update
                                </button>
                                {errors.permissions && (
                                    <p className="input-error mt-4">
                                        {errors.permissions}
                                    </p>
                                )}
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PermissionsPage;
