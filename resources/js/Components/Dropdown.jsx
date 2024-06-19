import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from "@headlessui/react";

// Root
export const Dropdown = ({ children, ...props }) => {
    return <Menu {...props}>{children}</Menu>;
};

// Trigger
export const DropdownTrigger = ({ children, as = "button", ...props }) => {
    return (
        <MenuButton as={as} {...props}>
            {children}
        </MenuButton>
    );
};

// Dropdown Items
export const DropdownItems = ({ children }) => {
    return (
        <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <MenuItems
                anchor="bottom end"
                className="min-w-48 bg-white shadow-lg rounded-md p-2 mt-2 dark:bg-zinc-800 focus:outline-none"
            >
                {children}
            </MenuItems>
        </Transition>
    );
};

// Dropdown Item
export const DropdownItem = ({ children, as = "button", ...props }) => {
    return (
        <MenuItem as={as} {...props}>
            {children}
        </MenuItem>
    );
};
