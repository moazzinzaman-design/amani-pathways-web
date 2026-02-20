"use client";

import { useEffect, useRef } from "react";

/**
 * UPGRADE #4 — Cursor Spotlight Glow
 * Renders a soft radial glow that follows the user's cursor
 * across dark sections (hero, CTA, etc.).
 * Add className="spotlight-container" to the parent section.
 */
export default function CursorSpotlight() {
    const spotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const containers = document.querySelectorAll<HTMLElement>(".spotlight-container");

        const handleMouseMove = (e: MouseEvent) => {
            containers.forEach((container) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const spot = container.querySelector<HTMLDivElement>(".spotlight");
                if (spot) {
                    spot.style.left = `${x}px`;
                    spot.style.top = `${y}px`;
                    spot.style.opacity = "1";
                }
            });
        };

        const handleMouseLeave = () => {
            containers.forEach((container) => {
                const spot = container.querySelector<HTMLDivElement>(".spotlight");
                if (spot) spot.style.opacity = "0";
            });
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return <div ref={spotRef} />;
}
