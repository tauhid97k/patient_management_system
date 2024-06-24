import { DataTable } from "@/Components/Table";
import { Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { columns } from "./columns";

const PatientsPage = ({ patients, filters }) => {
    const [search] = useState(filters.search);
    const { can } = usePage().props;

    // Search API (No debounce added for now)
    const handleSearch = (e) => {
        router.visit(route("patients.index"), {
            method: "get",
            data: { search: e.target.value },
            preserveState: true,
            replace: true,
        });
    };

    return (
        <>
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-medium">Patients</h2>
                {can?.create_patient && (
                    <Link
                        href={route("patients.create")}
                        className="btn btn-primary"
                    >
                        Add Patient
                    </Link>
                )}
            </div>

            <div className="flex flex-col gap-4">
                <input
                    onChange={handleSearch}
                    type="search"
                    name="search"
                    defaultValue={search}
                    placeholder="Search name..."
                    className="input-contrast md:max-w-96"
                />
                <DataTable columns={columns} data={patients} />
            </div>
        </>
    );
};

export default PatientsPage;
