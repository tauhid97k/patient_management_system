import { Link } from "@inertiajs/react";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

export function DataTable({ columns, data }) {
    // Init table
    const table = useReactTable({
        data: data.data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="rounded-md overflow-hidden bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            <div className="overflow-auto">
                <table className="w-full text-[15px]">
                    <thead className="text-base tracking-wide text-zinc-700 dark:text-zinc-200">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <th
                                            className="h-14 px-6 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 whitespace-nowrap bg-zinc-200/50 dark:bg-zinc-700/50 border-b border-zinc-200 dark:border-zinc-700"
                                            key={header.id}
                                        >
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </th>
                                    );
                                })}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <tr
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <td
                                            className="px-6 py-4 align-middle [&:has([role=checkbox])]:pr-0 max-w-[230px] truncate text-zinc-600 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-700"
                                            key={cell.id}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="h-28 text-center text-lg text-zinc-500 dark:text-zinc-400"
                                >
                                    No data found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="py-4 flex items-center flex-wrap justify-center gap-2 border-t border-zinc-200 dark:border-zinc-700">
                {data.links.map((link) =>
                    link.url ? (
                        <Link
                            className={`h-10 min-w-10 flex items-center justify-center rounded p-3 font-bold ${
                                link.active
                                    ? "bg-blue-600 text-white dark:text-zinc-300 dark:bg-zinc-700"
                                    : "hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
                            }`}
                            key={link.label}
                            preserveScroll
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <span
                            className="h-10 p-3 flex items-center justify-center rounded font-bold text-zinc-500"
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    )
                )}
            </div>
        </div>
    );
}
