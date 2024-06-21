import { Link } from "@inertiajs/react";
import { X } from "lucide-react";
import { useContext } from "react";
import { SidebarContext } from "@/Layouts/AppLayout";

const SidebarHeader = () => {
    const { setIsSidebarOpen } = useContext(SidebarContext);

    return (
        <div className="h-16 shrink-0 flex justify-between items-center px-4 py-3 border-b border-zinc-200 dark:border-zinc-700">
            <Link href="/" className="text-2xl font-bold">
                Logo
            </Link>
            <button
                onClick={() => setIsSidebarOpen(false)}
                className="btn-icon lg:hidden"
            >
                <X />
            </button>
        </div>
    );
};

export default SidebarHeader;
