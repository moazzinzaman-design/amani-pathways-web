"use client";

import { useEffect } from "react";

/**
 * UPGRADE #4 — Cursor Spotlight Glow (rAF-throttled)
 * Moves a radial glow element to follow the cursor inside any .spotlight-container.
 * Throttled with requestAnimationFrame to avoid layout thrashing.
 */
export default function CursorSpotlight() {
    useEffect(() => {
        let rafId: number | null = null;
        let lastX = 0;
        let lastY = 0;
        let dirty = false;

        const handleMouseMove = (e: MouseEvent) => {
            lastX = e.clientX;
            lastY = e.clientY;
            dirty = true;
        };

        const update = () => {
            if (dirty) {
                dirty = false;
                const containers = document.querySelectorAll<HTMLElement>(".spotlight-container");
                containers.forEach((container) => {
                    const spot = container.querySelector<HTMLElement>(".spotlight");
                    if (!spot) return;
                    const rect = container.getBoundingClientRect();
                    // Only update if mouse is actually inside the container
                    if (
                        lastX >= rect.left && lastX <= rect.right &&
                        lastY >= rect.top && lastY <= rect.bottom
                    ) {
                        spot.style.left = `${lastX - rect.left}px`;
                        spot.style.top = `${lastY - rect.top}px`;
                        spot.style.opacity = "1";
                    } else {
                        spot.style.opacity = "0";
                    }
                });
            }
            rafId = requestAnimationFrame(update);
        };

        document.addEventListener("mousemove", handleMouseMove, { passive: true });
        rafId = requestAnimationFrame(update);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, []);

    return null;
}
