import Modal from "@/Components/Modal";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Shield, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const rolesColumns = [
    {
        header: "Name",
        accessorKey: "name",
        cell: ({ row }) => {
            const { name } = row.original;
            return (
                <span className="text-lg font-medium capitalize px-3 py-1 rounded-full text-zinc-700 dark:text-white bg-zinc-200 dark:bg-zinc-900">
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
            const [confirmRoleDelete, setConfirmRoleDelete] = useState(false);

            const { can } = usePage().props;
            const { processing, delete: destroy } = useForm();

            const closeModal = () => {
                setConfirmRoleDelete(false);
            };

            const handleRoleDelete = (e) => {
                e.preventDefault();
                destroy(route("rolePermissions.destroy", { id }), {
                    preserveScroll: true,
                    onSuccess: () => {
                        closeModal();
                        toast.success("Role deleted");
                    },
                });
            };

            return can?.edit_role_permissions ||
                can?.delete_role_permissions ? (
                <>
                    <div className="flex gap-2 items-center">
                        {can?.edit_role_permissions && (
                            <Link
                                href={route("rolePermissions.show", { id })}
                                className="btn btn-secondary w-fit"
                            >
                                <Shield className="icon" />
                                <span>Permissions</span>
                            </Link>
                        )}
                        {can?.delete_role_permissions && (
                            <button
                                onClick={() => setConfirmRoleDelete(true)}
                                className="btn btn-danger"
                            >
                                <Trash className="icon" />
                                <span>Delete</span>
                            </button>
                        )}
                    </div>

                    <Modal show={confirmRoleDelete} onClose={closeModal}>
                        <section className="space-y-5 p-5">
                            <header>
                                <h2 className="text-xl font-medium text-zinc-700 dark:text-zinc-300">
                                    Delete Role
                                </h2>

                                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                                    Once role is deleted, users associated with
                                    this role won't be able login in the system
                                </p>
                            </header>
                            <form
                                onSubmit={handleRoleDelete}
                                className="flex justify-end"
                            >
                                <fieldset
                                    disabled={processing}
                                    className="disabled:opacity-70"
                                >
                                    <div className="flex justify-end gap-4">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </fieldset>
                            </form>
                        </section>
                    </Modal>
                </>
            ) : null;
        },
    },
];
