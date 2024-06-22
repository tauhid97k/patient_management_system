import SidebarMenuItem from "./SidebarMenuItem";
import {
    ClipboardPlus,
    LayoutGrid,
    ShieldCheck,
    UsersRound,
} from "lucide-react";

const SidebarMenu = () => {
    return (
        <nav className="grow flex flex-col gap-1.5 overflow-y-auto p-4">
            <SidebarMenuItem
                href={route("dashboard")}
                active={route().current("dashboard")}
                icon={<LayoutGrid className="size-[22px]" />}
                text="Dashboard"
            />
            <SidebarMenuItem
                href={route("users.index")}
                active={route().current("users.index")}
                icon={<UsersRound className="size-[22px]" />}
                text="Users"
            />
            <SidebarMenuItem
                href={route("patients.index")}
                active={route().current("patients.index")}
                icon={<ClipboardPlus className="size-[22px]" />}
                text="Patients"
            />
            <SidebarMenuItem
                href={route("rolePermissions.index")}
                active={route().current("rolePermissions.index")}
                icon={<ShieldCheck className="size-[22px]" />}
                text="Role Permissions"
            />
        </nav>
    );
};

export default SidebarMenu;
