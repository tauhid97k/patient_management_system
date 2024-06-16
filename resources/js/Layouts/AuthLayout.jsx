const AuthLayout = ({ children }) => {
    return (
        <div className="container min-h-screen py-4 grid place-items-center">
            <main className="w-full max-w-sm">{children}</main>
        </div>
    );
};

export default AuthLayout;
