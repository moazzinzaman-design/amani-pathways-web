"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import FocusTrap from "focus-trap-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/welcome-pack", label: "Welcome Pack" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/compliance", label: "Compliance" },
  { href: "/commissioners", label: "Commissioners" },
  { href: "/interactive-map", label: "Map" },
  { href: "/news", label: "News" },
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
      className={`fixed top-4 inset-x-4 sm:inset-x-6 lg:inset-x-8 max-w-7xl mx-auto z-50 rounded-2xl transition-all duration-500 border ${scrolled
        ? "bg-slate-950/40 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-white/10"
        : "bg-transparent border-transparent"
        }`}
    >
      <div className="px-4 py-2 sm:px-6">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`relative transition-all duration-500 ${scrolled ? "w-10 h-10" : "w-12 h-12"} group-hover:drop-shadow-[0_0_15px_rgba(45,212,191,0.6)]`}>
              <Image
                src="/logo-icon.svg"
                alt="Amani Pathways Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight leading-tight transition-all duration-300 text-slate-100 group-hover:text-white drop-shadow-sm`}>
                Amani Pathways
              </span>
              <span className={`text-[9px] font-bold tracking-[0.2em] uppercase hidden sm:block transition-colors duration-300 ${scrolled ? "text-teal-400" : "text-teal-400/80"
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
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                    ? "text-white"
                    : scrolled
                      ? "text-slate-300 hover:text-white hover:bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/80 to-teal-500/80 shadow-[0_0_15px_rgba(124,92,252,0.4)] backdrop-blur-md border border-white/20" />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
            <div className="mx-3 flex items-center">
              <ThemeToggle />
            </div>

            <Link
              href="/referrals"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-md shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Sparkles className="w-3.5 h-3.5 relative" />
              <span className="relative">Make a Referral</span>
            </Link>
          </div>

          {/* Mobile Right Icons */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200"
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
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <FocusTrap
          active={mobileOpen}
          focusTrapOptions={{
            onDeactivate: () => setMobileOpen(false),
            clickOutsideDeactivates: true,
          }}
        >
          <div className="lg:hidden absolute top-full left-0 w-full mt-2 rounded-2xl bg-slate-950/90 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)] animate-fade-up overflow-hidden">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                      ? "bg-gradient-to-r from-indigo-500/80 to-teal-500/80 text-white shadow-[0_0_15px_rgba(124,92,252,0.4)] border border-white/20"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/referrals"
                onClick={() => setMobileOpen(false)}
                className="block mt-4 px-4 py-3 bg-gradient-to-r from-teal-500 via-indigo-500 to-indigo-600 text-white text-sm font-bold tracking-wide rounded-xl text-center shadow-[0_0_20px_rgba(20,184,166,0.4)]"
              >
                ✨ Make a Referral
              </Link>
            </div>
          </div>
        </FocusTrap>
      )}
    </nav>
  );
}
