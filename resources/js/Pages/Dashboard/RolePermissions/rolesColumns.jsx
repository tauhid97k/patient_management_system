import { Link } from "@inertiajs/react";
import { Shield } from "lucide-react";

export const rolesColumns = [
    {
        header: "Name",
        accessorKey: "name",
        cell: ({ row }) => {
            const { name } = row.original;
            return (
                <span
                    className={`text-lg font-medium capitalize px-3 py-1 rounded-full text-zinc-700 dark:text-white ${
                        name === "admin"
                            ? "bg-orange-200 dark:bg-orange-900/50"
                            : "bg-zinc-200 dark:bg-zinc-900"
                    }`}
                >
                    {name}
                </span>
            );
        },
    },
    {
        header: "Created At",
        accessorKey: "created_at",
    },
    {
        header: "Action",
        cell: ({ row }) => {
            const { id } = row.original;

            return (
                <Link
                    href={route("rolePermissions.show", { id })}
                    className="btn btn-secondary w-fit"
                >
                    <Shield className="icon" />
                    <span>Permissions</span>
                </Link>
            );
        },
    },
];
