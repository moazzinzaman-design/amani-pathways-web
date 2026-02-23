"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
    const pathname = usePathname();

    // Don't show breadcrumbs on the home page or welcome pack
    if (pathname === "/" || pathname === "/welcome-pack") return null;

    const pathSegments = pathname.split("/").filter((segment) => segment);

    return (
        <nav aria-label="Breadcrumb" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <ol className="flex items-center space-x-2 text-sm text-slate-500">
                <li>
                    <Link href="/" className="hover:text-indigo-600 transition-colors flex items-center">
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathSegments.length - 1;

                    // Format segment: "interactive-map" -> "Interactive Map"
                    const formattedSegment = segment
                        .split("-")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ");

                    return (
                        <li key={href} className="flex items-center space-x-2">
                            <ChevronRight className="w-4 h-4 text-slate-300" />
                            {isLast ? (
                                <span className="font-semibold text-slate-900" aria-current="page">
                                    {formattedSegment}
                                </span>
                            ) : (
                                <Link href={href} className="hover:text-indigo-600 transition-colors">
                                    {formattedSegment}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
