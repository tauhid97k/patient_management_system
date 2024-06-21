import Drawer from "@/Components/Drawer";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import { useContext, useEffect } from "react";
import { SidebarContext } from "@/Layouts/AppLayout";

const Sidebar = () => {
    const { isSidebarMobile, isSidebarOpen, setIsSidebarOpen } =
        useContext(SidebarContext);

    // Get current path
    const currentPath = route().current();

    // Mobile sidebar hide on path change
    useEffect(() => {
        if (isSidebarMobile) {
            setIsSidebarOpen(false);
        }
    }, [currentPath]);

    return (
        <>
            {/* Mobile Sidebar */}
            <Drawer
                show={isSidebarOpen && isSidebarMobile}
                onClose={() => setIsSidebarOpen(false)}
            >
                <SidebarHeader />
                <SidebarMenu />
            </Drawer>

            {/* Desktop Sidebar */}
            <aside
                className={`hidden lg:flex flex-col w-64 shrink-0 h-screen bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 transition-[margin] duration-300 ${
                    isSidebarOpen ? "ml-0" : "-ml-64"
                }`}
            >
                <SidebarHeader />
                <SidebarMenu />
            </aside>
        </>
    );
};

export default Sidebar;
