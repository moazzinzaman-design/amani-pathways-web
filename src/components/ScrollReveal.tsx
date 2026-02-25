"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * UPGRADE #1 — Scroll-reveal
 * Attaches an IntersectionObserver to all .reveal* elements globally.
 * When they enter the viewport, the .revealed class is added,
 * triggering the CSS transition defined in globals.css.
 * 
 * Includes `pathname` dependency so observers reattach when navigating
 * back and forth between pages in a NextJS single-page-app architecture.
 */
export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale";
        const elements = document.querySelectorAll<HTMLElement>(selectors);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        const delay = el.dataset.delay ?? "0";
                        setTimeout(() => el.classList.add("revealed"), Number(delay));
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [pathname]);

    return null;
}
