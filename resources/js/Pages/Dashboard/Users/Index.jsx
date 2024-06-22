import { Link } from "@inertiajs/react";

const UsersPage = () => {
    return (
        <>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-medium">Users</h2>
                <Link href="#" className="btn btn-primary">
                    Add User
                </Link>
            </div>
        </>
    );
};

export default UsersPage;
