"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />;
    }

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
            aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} theme`}
        >
            <Sun className="w-5 h-5 text-amber-500 absolute scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
            <Moon className="w-5 h-5 text-indigo-600 absolute scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
            <span className="sr-only">Toggle theme</span>

            {/* Tooltip */}
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs py-1 px-2 rounded-md whitespace-nowrap pointer-events-none shadow-sm">
                Toggle Theme
            </span>
        </button>
    );
}
