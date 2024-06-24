import { Link, usePage } from "@inertiajs/react";
import { LayoutGrid, LogIn, LogOut, UserRoundCog } from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import {
    Dropdown,
    DropdownItem,
    DropdownItems,
    DropdownTrigger,
} from "./Dropdown";
import { Fragment } from "react";

const Navbar = () => {
    const { auth } = usePage().props;

    return (
        <header className="py-3 bg-white dark:bg-zinc-800 shadow-sm">
            <nav className="container flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    Brand
                </Link>
                <div className="flex items-center gap-4">
                    <ThemeToggler />
                    {auth.user ? (
                        <Dropdown>
                            <DropdownTrigger className="flex items-center justify-between gap-x-2 py-1 ps-1 pe-3 bg-zinc-100 dark:bg-zinc-900 rounded-full">
                                <img
                                    className="w-8 h-auto rounded-full"
                                    src="https://i.pravatar.cc/32"
                                    alt="profile image"
                                />
                                <span className="font-medium truncate max-w-[7.5rem]">
                                    {auth.user.name}
                                </span>
                                <svg
                                    className="data-open:rotate-180 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </DropdownTrigger>
                            <DropdownItems>
                                <DropdownItem
                                    as={Link}
                                    href={route("dashboard")}
                                >
                                    <LayoutGrid className="icon" />
                                    <span>Dashboard</span>
                                </DropdownItem>
                                <DropdownItem>
                                    <UserRoundCog className="icon" />
                                    <span>Profile</span>
                                </DropdownItem>
                                <DropdownItem as={Fragment}>
                                    <Link
                                        as="button"
                                        href={route("logout")}
                                        method="post"
                                    >
                                        <LogOut className="icon" />
                                        <span>Logout</span>
                                    </Link>
                                </DropdownItem>
                            </DropdownItems>
                        </Dropdown>
                    ) : (
                        <Link
                            href={route("login.view")}
                            className="btn btn-primary"
                        >
                            <LogIn className="icon" /> Login
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
