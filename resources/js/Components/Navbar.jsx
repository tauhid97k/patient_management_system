import { Link } from "@inertiajs/react";
import { LogIn } from "lucide-react";

const Navbar = () => {
    return (
        <header className="py-3 bg-zinc-800 border-b border-zinc-700">
            <nav className="container flex items-center justify-between">
                <Link className="text-2xl font-bold">Brand</Link>
                <Link href={route("login.view")} className="btn btn-primary">
                    <LogIn className="icon" /> Login
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
