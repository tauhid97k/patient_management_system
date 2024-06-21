import { Fragment } from "react";
import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";

const Drawer = ({
    children,
    show = false,
    closeable = true,
    onClose = () => {},
}) => {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    return (
        <Transition show={show} as={Fragment} leave="duration-200">
            <Dialog
                as="div"
                id="drawer"
                className="fixed inset-0 sm:px-0 z-40 transform transition-all"
                onClose={close}
            >
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute inset-0 bg-zinc-500/75 dark:bg-zinc-900/75" />
                </TransitionChild>

                <TransitionChild
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="ease-in-out duration-300"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <DialogPanel className="relative z-50 flex flex-col w-64 h-screen bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700">
                        {children}
                    </DialogPanel>
                </TransitionChild>
            </Dialog>
        </Transition>
    );
};

export default Drawer;
