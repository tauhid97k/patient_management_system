import {
    Dropdown,
    DropdownItem,
    DropdownItems,
    DropdownTrigger,
} from "@/Components/Dropdown";
import { EllipsisVertical, Eye, Pencil, Trash } from "lucide-react";

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
                <span className="capitalize px-3 py-1 bg-zinc-100 dark:bg-zinc-900/50 rounded-full">
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
            return (
                <Dropdown>
                    <DropdownTrigger className="btn-icon">
                        <EllipsisVertical />
                    </DropdownTrigger>
                    <DropdownItems className="border dark:border-zinc-700 z-10">
                        <DropdownItem>
                            <Eye className="icon" />
                            <span>View</span>
                        </DropdownItem>
                        <DropdownItem>
                            <Pencil className="icon" />
                            <span>Edit</span>
                        </DropdownItem>
                        <DropdownItem>
                            <Trash className="icon" />
                            <span>Delete</span>
                        </DropdownItem>
                    </DropdownItems>
                </Dropdown>
            );
        },
    },
];
