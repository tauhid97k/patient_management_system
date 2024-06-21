import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar/Index";
import { createContext, useLayoutEffect, useState } from "react";
import { Toaster } from "sonner";

// Sidebar Context
export const SidebarContext = createContext({
    isSidebarOpen: false,
    setIsSidebarOpen: () => {},
    isSidebarMobile: false,
    setIsSidebarMobile: () => {},
});

const AppLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSidebarMobile, setIsSidebarMobile] = useState(false);

    // Show/Hide Mobile/Desktop Sidebar On Window Resize
    useLayoutEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setIsSidebarOpen(false);
                setIsSidebarMobile(true);
            } else {
                setIsSidebarMobile(false);
                setIsSidebarOpen(true);
            }
        };

        // Initial check on mount
        handleResize();

        // Event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <SidebarContext.Provider
            value={{
                isSidebarOpen,
                setIsSidebarOpen,
                isSidebarMobile,
                setIsSidebarMobile,
            }}
        >
            <div className="flex overflow-hidden">
                <Sidebar />
                <div className="w-full h-screen overflow-y-auto">
                    <Header />
                    <main className="px-5 pt-5 pb-8">
                        <Toaster
                            position="top-center"
                            toastOptions={{
                                duration: 2000,
                                classNames: {
                                    success:
                                        "text-lg text-zinc-800 dark:text-zinc-200 font-bold border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800",
                                },
                            }}
                        />
                        {children}
                    </main>
                </div>
            </div>
        </SidebarContext.Provider>
    );
};

export default AppLayout;
