import Sidebar from "@/Components/Sidebar/Index";

const AppLayout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <main>{children}</main>
        </>
    );
};

export default AppLayout;
