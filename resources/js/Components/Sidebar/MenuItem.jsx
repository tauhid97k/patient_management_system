import { Link } from "@inertiajs/react";

const MenuItem = ({ icon, text, active = false, ...props }) => {
    return (
        <Link
            {...props}
            className={`sidebar-link ${
                active
                    ? "dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-700"
                    : "dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
            }`}
        >
            {icon}
            <span>{text}</span>
        </Link>
    );
};

export default MenuItem;
