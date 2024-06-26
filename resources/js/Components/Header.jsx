import { Link, usePage } from "@inertiajs/react";
import { LogOut, MenuIcon, UserRoundCog } from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import {
    Dropdown,
    DropdownItem,
    DropdownItems,
    DropdownTrigger,
} from "./Dropdown";
import { Fragment, useContext } from "react";
import { SidebarContext } from "@/Layouts/AppLayout";

const Header = () => {
    const { auth } = usePage().props;
    const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

    return (
        <header className="h-16 sticky top-0 z-20 px-5 flex items-center bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
            <div className="w-full flex items-center justify-between gap-4">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="btn-icon"
                >
                    <MenuIcon />
                </button>
                <div className="flex items-center gap-4">
                    <ThemeToggler />
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
                </div>
            </div>
        </header>
    );
};

export default Header;
