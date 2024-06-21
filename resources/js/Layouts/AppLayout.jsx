import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar/Index";
import { Toaster } from "sonner";

const AppLayout = ({ children }) => {
    return (
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
    );
};

export default AppLayout;
