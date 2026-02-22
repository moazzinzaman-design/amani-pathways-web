"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/welcome-pack", label: "Welcome Pack" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/compliance", label: "Compliance" },
  { href: "/commissioners", label: "Commissioners" },
  { href: "/interactive-map", label: "Map" },
  { href: "/referrals", label: "Referrals" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-indigo-500/5 border-b border-white/50"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className={`relative transition-all duration-500 ${scrolled ? "w-11 h-11" : "w-10 h-10"} group-hover:drop-shadow-[0_0_10px_rgba(124,92,252,0.5)]`}>
              <Image
                src="/logo-icon.svg"
                alt="Amani Pathways Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tight leading-tight transition-all duration-300 ${scrolled
                ? "bg-gradient-to-r from-indigo-700 to-teal-600 bg-clip-text text-transparent"
                : "text-white"
                }`}>
                Amani Pathways
              </span>
              <span className={`text-[10px] font-medium tracking-widest uppercase hidden sm:block transition-colors duration-300 ${scrolled ? "text-slate-400" : "text-white/60"
                }`}>
                Supported Accommodation
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                    ? "text-white"
                    : scrolled
                      ? "text-slate-600 hover:text-indigo-700"
                      : "text-white/80 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-md shadow-indigo-500/25" />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
            <Link
              href="/referrals"
              className="ml-3 group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-md shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Sparkles className="w-3.5 h-3.5 relative" />
              <span className="relative">Make a Referral</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
            aria-label={mobileOpen ? "Close main menu" : "Open main menu"}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 animate-fade-up">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                    ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/referrals"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-teal-500 text-white text-sm font-semibold rounded-xl text-center shadow-md"
            >
              ✨ Make a Referral
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
