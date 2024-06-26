import { Link, usePage } from "@inertiajs/react";
import { rolesColumns } from "./rolesColumns";
import { DataTable } from "@/Components/Table";

const RolePermissionsPage = ({ roles }) => {
    const { can } = usePage().props;

    return (
        <>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-medium">Roles</h2>
                {can?.create_role_permissions && (
                    <Link
                        href={route("rolePermissions.create")}
                        className="btn btn-primary"
                    >
                        Create Role
                    </Link>
                )}
            </div>

            <DataTable columns={rolesColumns} data={roles} />
        </>
    );
};

export default RolePermissionsPage;
