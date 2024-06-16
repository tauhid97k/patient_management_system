import "./bootstrap";
import "preline";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import GuestLayout from "@/Layouts/GuestLayout";
import AuthLayout from "@/Layouts/AuthLayout";
import AppLayout from "@/Layouts/AppLayout";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout = page.default.layout
            ? page.default.layout
            : name.startsWith("Auth/")
            ? (page) => <AuthLayout children={page} />
            : name.startsWith("Dashboard/")
            ? (page) => <AppLayout children={page} />
            : (page) => <GuestLayout children={page} />;
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: "#fff",
    },
});