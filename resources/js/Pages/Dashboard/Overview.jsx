import { Link } from "@inertiajs/react";

const OverviewPage = ({ data }) => {
    return (
        <>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-medium">Overview</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <Link
                    href={route("users.index")}
                    className="text-2xl p-4 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 flex justify-between"
                >
                    <h2>Users</h2>
                    <span>{data.users}</span>
                </Link>
                <Link
                    href={route("patients.index")}
                    className="text-2xl p-4 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 flex justify-between"
                >
                    <h2>Patients</h2>
                    <span>{data.patients}</span>
                </Link>
                <Link
                    href={route("rolePermissions.index")}
                    className="text-2xl p-4 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 flex justify-between"
                >
                    <h2>Roles</h2>
                    <span>{data.roles}</span>
                </Link>
            </div>
        </>
    );
};

export default OverviewPage;
