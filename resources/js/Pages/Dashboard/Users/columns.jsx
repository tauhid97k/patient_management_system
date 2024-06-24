import {
    Dropdown,
    DropdownItem,
    DropdownItems,
    DropdownTrigger,
} from "@/Components/Dropdown";
import { EllipsisVertical, Eye, Pencil, Trash } from "lucide-react";
import Modal from "@/Components/Modal";
import { useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { toast } from "sonner";

export const columns = [
    {
        header: "Name",
        accessorKey: "name",
    },
    {
        header: "Email",
        accessorKey: "email",
    },
    {
        header: "Role",
        accessorKey: "role",
        cell: ({ row }) => {
            const { role } = row.original;
            return (
                <span
                    className={`capitalize font-medium px-3 py-1 rounded-full text-zinc-700 dark:text-white ${
                        role ? "bg-zinc-200 dark:bg-zinc-900" : ""
                    }`}
                >
                    {role}
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
            const [confirmUserDelete, setConfirmUserDelete] = useState(false);

            const { can } = usePage().props;
            const { processing, delete: destroy } = useForm();

            const closeModal = () => {
                setConfirmUserDelete(false);
            };

            const handleUserDelete = (e) => {
                e.preventDefault();
                destroy(route("users.destroy", { id }), {
                    preserveScroll: true,
                    onSuccess: () => {
                        closeModal();
                        toast.success("User deleted");
                    },
                });
            };

            return can?.show_user || can?.edit_user || can?.delete_user ? (
                <>
                    <Dropdown>
                        <DropdownTrigger className="btn-icon">
                            <EllipsisVertical />
                        </DropdownTrigger>

                        <DropdownItems className="border dark:border-zinc-700 z-10">
                            {can?.show_user && (
                                <DropdownItem
                                    as={Link}
                                    href={route("users.show", { id })}
                                >
                                    <Eye className="icon" />
                                    <span>View</span>
                                </DropdownItem>
                            )}
                            {can?.edit_user && (
                                <DropdownItem
                                    as={Link}
                                    href={route("users.edit", { id })}
                                >
                                    <Pencil className="icon" />
                                    <span>Edit</span>
                                </DropdownItem>
                            )}
                            {can?.delete_user && (
                                <DropdownItem
                                    onClick={() => setConfirmUserDelete(true)}
                                >
                                    <Trash className="icon" />
                                    <span>Delete</span>
                                </DropdownItem>
                            )}
                        </DropdownItems>
                    </Dropdown>

                    <Modal show={confirmUserDelete} onClose={closeModal}>
                        <section className="space-y-5 p-5">
                            <header>
                                <h2 className="text-xl font-medium text-zinc-700 dark:text-zinc-300">
                                    Delete User
                                </h2>

                                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                                    Once user is deleted, all of its resources
                                    and data will be permanently deleted.
                                </p>
                            </header>
                            <form
                                onSubmit={handleUserDelete}
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
