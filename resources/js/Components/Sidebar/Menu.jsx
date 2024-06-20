import MenuItem from "./MenuItem";
import {
    ClipboardPlus,
    LayoutGrid,
    ShieldCheck,
    UsersRound,
} from "lucide-react";

const Menu = () => {
    return (
        <nav className="grow flex flex-col gap-1.5 overflow-y-auto p-4">
            <MenuItem
                href={route("dashboard")}
                active={route().current("dashboard")}
                icon={<LayoutGrid className="size-[22px]" />}
                text="Dashboard"
            />
            <MenuItem
                href={route("users.index")}
                active={route().current("users.index")}
                icon={<UsersRound className="size-[22px]" />}
                text="Users"
            />
            <MenuItem
                href={route("patients.index")}
                active={route().current("patients.index")}
                icon={<ClipboardPlus className="size-[22px]" />}
                text="Patients"
            />
            <MenuItem
                href="#"
                icon={<ShieldCheck className="size-[22px]" />}
                text="Role Permissions"
            />
        </nav>
    );
};

export default Menu;
