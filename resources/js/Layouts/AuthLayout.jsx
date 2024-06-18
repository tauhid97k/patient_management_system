import Navbar from "@/Components/Navbar";

const AuthLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="container min-h-[calc(100vh-64px)] py-4 grid place-items-center">
                <main className="w-full max-w-sm">{children}</main>
            </div>
        </>
    );
};

export default AuthLayout;
