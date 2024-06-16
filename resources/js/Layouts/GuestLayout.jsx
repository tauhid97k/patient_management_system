import Navbar from "../Components/Navbar";

const GuestLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="container">{children}</div>
        </>
    );
};

export default GuestLayout;
