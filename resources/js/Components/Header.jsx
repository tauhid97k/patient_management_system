import { Link, usePage } from "@inertiajs/react";
import { LogOut, MenuIcon, UserRoundCog } from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import {
    Dropdown,
    DropdownItem,
    DropdownItems,
    DropdownTrigger,
} from "./Dropdown";
import { Fragment } from "react";

const Header = () => {
    const { auth } = usePage().props;

    return (
        <header className="h-16 sticky top-0 px-4 flex items-center bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
            <div className="w-full flex items-center justify-between gap-4">
                <button className="btn-icon">
                    <MenuIcon />
                </button>
                <div className="flex items-center gap-4">
                    <ThemeToggler />
                    <Dropdown>
                        <DropdownTrigger className="flex items-center justify-between gap-x-2 py-1 ps-1 pe-3 bg-zinc-100 dark:bg-zinc-900 rounded-full">
                            <img
                                className="w-8 h-auto rounded-full"
                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
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
                            <DropdownItem className="dropdown-link">
                                <UserRoundCog />
                                <span>Profile</span>
                            </DropdownItem>
                            <DropdownItem
                                as={Fragment}
                                className="dropdown-link"
                            >
                                <Link
                                    as="button"
                                    href={route("logout")}
                                    method="post"
                                >
                                    <LogOut />
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
