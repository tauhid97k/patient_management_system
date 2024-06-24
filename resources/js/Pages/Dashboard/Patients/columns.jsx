import {
    Dropdown,
    DropdownItem,
    DropdownItems,
    DropdownTrigger,
} from "@/Components/Dropdown";
import { EllipsisVertical, Eye, Pencil, Trash } from "lucide-react";
import Modal from "@/Components/Modal";
import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { toast } from "sonner";

export const columns = [
    {
        header: "Name",
        accessorKey: "name",
    },
    {
        header: "Age",
        accessorKey: "age",
    },
    {
        header: "Blood Group",
        accessorKey: "blood_group",
        cell: ({ row }) => {
            const { blood_group } = row.original;

            return (
                <span className="capitalize px-3 py-1 bg-zinc-200 dark:bg-zinc-900 rounded-full">
                    {blood_group.split("_").join(" ")}
                </span>
            );
        },
    },
    {
        header: "Marital Status",
        accessorKey: "marital_status",
    },
    {
        header: "Phone",
        accessorKey: "phone",
    },
    {
        header: "Created At",
        accessorKey: "created_at",
    },
    {
        header: "Action",
        cell: ({ row }) => {
            const { id } = row.original;
            const [confirmPatientDelete, setConfirmPatientDelete] =
                useState(false);
            const { processing, delete: destroy } = useForm();

            const closeModal = () => {
                setConfirmPatientDelete(false);
            };

            const handlePatientDelete = (e) => {
                e.preventDefault();
                destroy(route("patients.destroy", { id }), {
                    preserveScroll: true,
                    onSuccess: () => {
                        closeModal();
                        toast.success("Patient deleted");
                    },
                });
            };

            return (
                <>
                    <Dropdown>
                        <DropdownTrigger className="btn-icon">
                            <EllipsisVertical />
                        </DropdownTrigger>
                        <DropdownItems className="border dark:border-zinc-700 z-10">
                            <DropdownItem>
                                <Eye className="icon" />
                                <span>View</span>
                            </DropdownItem>
                            <DropdownItem
                                as={Link}
                                href={route("patients.edit", { id })}
                            >
                                <Pencil className="icon" />
                                <span>Edit</span>
                            </DropdownItem>
                            <DropdownItem
                                onClick={() => setConfirmPatientDelete(true)}
                            >
                                <Trash className="icon" />
                                <span>Delete</span>
                            </DropdownItem>
                        </DropdownItems>
                    </Dropdown>

                    <Modal show={confirmPatientDelete} onClose={closeModal}>
                        <section className="space-y-5 p-5">
                            <header>
                                <h2 className="text-xl font-medium text-zinc-700 dark:text-zinc-300">
                                    Delete Patient
                                </h2>

                                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                                    Once patient is deleted, all of its
                                    resources and data will be permanently
                                    deleted.
                                </p>
                            </header>
                            <form
                                onSubmit={handlePatientDelete}
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
            );
        },
    },
];
