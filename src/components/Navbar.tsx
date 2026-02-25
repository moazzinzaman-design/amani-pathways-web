"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ChevronDown, Map, ShieldCheck, FileText, Send, BookOpen, Users, LayoutDashboard, Newspaper } from "lucide-react";
import FocusTrap from "focus-trap-react";
import { ThemeToggle } from "@/components/ThemeToggle";

type SubLink = {
  href: string;
  label: string;
  description: string;
  icon: React.ElementType;
};

type NavLink = {
  label: string;
  href?: string;
  subLinks?: SubLink[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Discover",
    subLinks: [
      { href: "/about", label: "About Us", description: "Our mission, vision, and values", icon: Users },
      { href: "/news", label: "Latest News", description: "Updates from Amani Pathways", icon: Newspaper },
    ]
  },
  {
    label: "Services",
    subLinks: [
      { href: "/services", label: "Our Services", description: "Supported accommodation details", icon: LayoutDashboard },
      { href: "/service-overview", label: "Service Overview & Data", description: "Interactive business plan & SROI", icon: FileText },
      { href: "/interactive-map", label: "Property Map", description: "Locations across West Yorkshire", icon: Map },
    ]
  },
  {
    label: "Partners",
    subLinks: [
      { href: "/commissioners", label: "Commissioners", description: "Information for local authorities", icon: Users },
      { href: "/compliance", label: "Compliance & Safety", description: "Ofsted standards and safeguarding", icon: ShieldCheck },
    ]
  },
  {
    label: "Resources",
    subLinks: [
      { href: "/welcome-pack", label: "Welcome Pack", description: "Essential info for new tenants", icon: BookOpen },
      { href: "/referrals", label: "Make a Referral", description: "Submit a placement request", icon: Send },
    ]
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

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
              <span className={`text-[9px] font-bold tracking-[0.2em] uppercase hidden sm:block transition-colors duration-300 ${scrolled ? "text-teal-400" : "text-teal-400/80"}`}>
                Supported Accommodation
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || link.subLinks?.some(sub => pathname === sub.href);

              if (link.subLinks) {
                return (
                  <div key={link.label} className="relative group px-1">
                    <button
                      className={`relative px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${isActive
                          ? "text-white"
                          : scrolled
                            ? "text-slate-300 hover:text-white hover:bg-white/5"
                            : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/80 to-teal-500/80 shadow-[0_0_15px_rgba(124,92,252,0.4)] backdrop-blur-md border border-white/20" />
                      )}
                      <span className="relative z-10">{link.label}</span>
                      <ChevronDown className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Desktop Hover Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[300px] rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top transform scale-95 group-hover:scale-100 p-2 overflow-hidden before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:content-['']">
                      <div className="flex flex-col gap-1">
                        {link.subLinks.map(subLink => {
                          const Icon = subLink.icon;
                          const isSubActive = pathname === subLink.href;
                          return (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              className={`flex items-start gap-3.5 p-3 rounded-xl transition-all duration-200 group/item ${isSubActive
                                  ? "bg-indigo-500/20 shadow-[inset_0_0_12px_rgba(99,102,241,0.2)]"
                                  : "hover:bg-white/5"
                                }`}
                            >
                              <div className={`mt-0.5 shrink-0 p-2 rounded-lg transition-colors duration-200 ${isSubActive ? "bg-teal-500/20 text-teal-400" : "bg-slate-800 text-slate-400 group-hover/item:text-teal-400 group-hover/item:bg-slate-700 shadow-inner"}`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex flex-col">
                                <span className={`text-sm font-semibold transition-colors duration-200 ${isSubActive ? "text-teal-300" : "text-slate-200 group-hover/item:text-white"}`}>
                                  {subLink.label}
                                </span>
                                <span className={`text-[13px] leading-snug mt-0.5 transition-colors duration-200 line-clamp-2 ${isSubActive ? "text-indigo-200" : "text-slate-400 group-hover/item:text-slate-300"}`}>
                                  {subLink.description}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href!}
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
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
            <div className="mx-3 flex items-center">
              <ThemeToggle />
            </div>

            <Link
              href="/referrals"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Sparkles className="w-4 h-4 relative shrink-0" />
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
          <div className="lg:hidden absolute top-full left-0 w-full mt-3 rounded-2xl bg-slate-950/95 backdrop-blur-3xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.8)] animate-fade-up overflow-hidden pb-5 max-h-[85vh] overflow-y-auto">
            <div className="px-4 py-5 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || link.subLinks?.some(sub => pathname === sub.href);

                if (link.subLinks) {
                  const isDropdownOpen = openDropdown === link.label;
                  return (
                    <div key={link.label} className="flex flex-col rounded-xl overflow-hidden bg-white/5 border border-white/5 transition-all">
                      <button
                        onClick={() => toggleMobileDropdown(link.label)}
                        className={`w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium transition-colors ${isActive && !isDropdownOpen
                            ? "bg-indigo-500/20 text-teal-300"
                            : isDropdownOpen
                              ? "bg-white/10 text-white"
                              : "text-slate-200 hover:bg-white/10"
                          }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-teal-400" : "text-slate-400"}`} />
                      </button>

                      {/* Mobile Accordion Content */}
                      <div
                        className={`transition-all duration-300 ease-in-out origin-top overflow-hidden bg-black/40 ${isDropdownOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="p-2 space-y-1">
                          {link.subLinks.map(subLink => {
                            const Icon = subLink.icon;
                            const isSubActive = pathname === subLink.href;
                            return (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                onClick={() => setMobileOpen(false)}
                                className={`flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm transition-all ${isSubActive
                                    ? "bg-indigo-500/30 text-teal-300 font-semibold border border-indigo-500/30 shadow-inner"
                                    : "text-slate-300 hover:text-white hover:bg-white/10"
                                  }`}
                              >
                                <Icon className={`w-4 h-4 shrink-0 ${isSubActive ? "text-teal-400" : "text-slate-500"}`} />
                                <div className="flex flex-col">
                                  <span>{subLink.label}</span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-5 py-3.5 rounded-xl text-sm font-medium transition-all ${isActive
                        ? "bg-gradient-to-r from-indigo-500/80 to-teal-500/80 text-white shadow-[0_0_15px_rgba(124,92,252,0.4)] border border-white/20"
                        : "text-slate-200 hover:bg-white/10 hover:text-white bg-white/5 border border-white/5"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-5 px-1 mt-4 border-t border-white/10">
                <Link
                  href="/referrals"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2.5 w-full px-4 py-4 bg-gradient-to-r from-teal-500 via-indigo-500 to-indigo-600 text-white text-[15px] font-bold tracking-wide rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] transition-shadow"
                >
                  <Sparkles className="w-4 h-4 shrink-0" />
                  Make a Referral
                </Link>
              </div>
            </div>
          </div>
        </FocusTrap>
      )}
    </nav>
  );
}
