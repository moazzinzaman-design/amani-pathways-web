import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white">
            {/* Decorative orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-12 h-12 flex-shrink-0 drop-shadow-lg">
                                <Image
                                    src="/logo-icon.svg"
                                    alt="Amani Pathways Logo"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <span className="text-lg font-bold tracking-tight">
                                Amani Pathways
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-5">
                            Trauma-informed, Ofsted-regulated supported accommodation for
                            Unaccompanied Asylum-Seeking Children in Halifax, West Yorkshire.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-indigo-300">
                            <Heart className="w-3 h-3" />
                            <span>Empowering young futures since 2024</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 mb-5">
                            Navigate
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { href: "/about", label: "About Us" },
                                { href: "/services", label: "Our Services" },
                                { href: "/compliance", label: "Compliance" },
                                { href: "/referrals", label: "Referrals" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-all duration-200"
                                    >
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 mb-5">
                            Contact
                        </h3>
                        <ul className="space-y-3.5">
                            <li className="flex items-start gap-3 text-sm text-slate-400">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                                </div>
                                <span className="pt-1.5">Halifax, West Yorkshire, UK</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-400">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail className="w-3.5 h-3.5 text-teal-400" />
                                </div>
                                <a
                                    href="mailto:referrals@amanipathways.co.uk"
                                    className="pt-1.5 hover:text-white transition-colors"
                                >
                                    referrals@amanipathways.co.uk
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-400">
                                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                    <Phone className="w-3.5 h-3.5 text-teal-400" />
                                </div>
                                <span className="pt-1.5">Available on request</span>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Card */}
                    <div>
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-teal-500/20 border border-white/10">
                            <h3 className="font-bold text-sm mb-2">Ready to refer?</h3>
                            <p className="text-xs text-slate-400 mb-4">
                                Get in touch with our team to discuss a placement for a young person.
                            </p>
                            <Link
                                href="/referrals"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-teal-500 text-white text-xs font-semibold rounded-lg hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-200"
                            >
                                Start a Referral →
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} Amani Pathways Ltd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        {["Ofsted Regulated", "DBS Checked", "24/7 Safeguarding"].map(
                            (badge) => (
                                <span
                                    key={badge}
                                    className="px-2.5 py-1 rounded-full bg-white/5 text-[10px] font-medium text-slate-400 border border-white/5"
                                >
                                    {badge}
                                </span>
                            )
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}
