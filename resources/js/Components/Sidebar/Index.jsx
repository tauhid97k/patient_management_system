import { Link } from "@inertiajs/react";
import { MenuIcon } from "lucide-react";
import Menu from "./Menu";

const Sidebar = () => {
    return (
        <aside className="basis-64 h-screen shrink-0 flex flex-col bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700">
            {/* Sidebar Header */}
            <div className="h-16 shrink-0 flex justify-between items-center px-4 py-3 border-b border-zinc-200 dark:border-zinc-700">
                <Link href="/" className="text-2xl font-bold">
                    Logo
                </Link>
                <button className="btn-icon lg:hidden">
                    <MenuIcon />
                </button>
            </div>

            {/* Sidebar Menu */}
            <Menu />
        </aside>
    );
};

export default Sidebar;
