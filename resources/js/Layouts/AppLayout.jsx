import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar/Index";

const AppLayout = ({ children }) => {
    return (
        <div className="flex overflow-hidden">
            <Sidebar />
            <div className="w-full h-screen overflow-y-auto">
                <Header />
                <main className="px-5 pt-5 pb-8">{children}</main>
            </div>
        </div>
    );
};

export default AppLayout;
