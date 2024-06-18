import { Link } from "@inertiajs/react";
import { LogIn } from "lucide-react";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
    return (
        <header className="py-3 bg-white dark:bg-zinc-800 shadow-sm">
            <nav className="container flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    Brand
                </Link>
                <div className="flex items-center gap-4">
                    <ThemeToggler />
                    <Link href={route("login.view")} className="btn">
                        <LogIn className="icon" /> Login
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
