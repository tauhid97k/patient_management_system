import { Moon, Sun } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";

const ThemeToggler = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const htmlRef = useRef(document.documentElement);

    useLayoutEffect(() => {
        if (theme === "dark") {
            htmlRef.current.classList.add("dark");
        } else {
            htmlRef.current.classList.remove("dark");
        }
    }, [theme]);

    const handleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button onClick={handleTheme} className="btn-icon">
            {theme === "light" ? <Moon /> : <Sun />}
        </button>
    );
};

export default ThemeToggler;
