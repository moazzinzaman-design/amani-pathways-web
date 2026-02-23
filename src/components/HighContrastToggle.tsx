"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function HighContrastToggle() {
    const [isHighContrast, setIsHighContrast] = useState(false);

    useEffect(() => {
        // Check local storage on initial load
        const storedPreference = localStorage.getItem("high-contrast-mode");
        if (storedPreference === "true") {
            setIsHighContrast(true);
            document.body.classList.add("high-contrast");
        }
    }, []);

    const toggleHighContrast = () => {
        setIsHighContrast(!isHighContrast);
        if (!isHighContrast) {
            document.body.classList.add("high-contrast");
            localStorage.setItem("high-contrast-mode", "true");
        } else {
            document.body.classList.remove("high-contrast");
            localStorage.setItem("high-contrast-mode", "false");
        }
    };

    return (
        <button
            onClick={toggleHighContrast}
            className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-[60] p-3 rounded-full bg-slate-900 border border-slate-700 text-white shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center group"
            aria-label={isHighContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
            title="Toggle High Contrast"
        >
            {isHighContrast ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}

            {/* Tooltip */}
            <span className="absolute right-full mr-4 px-2 py-1 bg-slate-800 text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {isHighContrast ? "Disable High Contrast" : "Enable High Contrast"}
            </span>
        </button>
    );
}
