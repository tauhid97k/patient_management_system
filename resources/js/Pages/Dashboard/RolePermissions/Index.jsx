import { Link } from "@inertiajs/react";

const RolePermissionsPage = ({ roles, permissions }) => {
    return (
        <>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-medium">Role Permissions</h2>
                <Link href="#" className="btn btn-primary">
                    Create Role
                </Link>
            </div>
        </>
    );
};

export default RolePermissionsPage;
