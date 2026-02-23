"use client";

import Image from "next/image";
import { Mail, Linkedin, Award, Shield } from "lucide-react";

const teamMembers = [
    {
        name: "Moazzin Zaman",
        role: "Director & Incoming Registered Manager",
        bio: "At 24, Moazzin leads Amani Pathways with a fresh perspective and a deep dedication to supporting young people. He is currently transitioning into the role of Registered Manager, ensuring our provisions consistently meet the highest standards of care and compliance.",
        image: "/images/education-halifax.png", // Placeholder
        credentials: ["Director", "Incoming Registered Manager"],
        email: "moazzin@amanipathways.co.uk",
    }
];

export default function TeamPreview() {
    return (
        <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold mb-4 border border-indigo-100">
                        <Shield className="w-3.5 h-3.5" />
                        Our People
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Meet the <span className="gradient-text">Team</span>
                    </h2>
                    <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                        Our dedicated professionals combine extensive experience, cultural understanding, and a deep commitment to the young people in our care.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-md">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full card-hover">
                                {/* Image Header */}
                                <div className="relative h-64 w-full overflow-hidden bg-slate-100 shrink-0">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
                                    <div className="absolute bottom-0 left-0 w-full p-6 text-white text-left">
                                        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                                        <p className="text-indigo-300 font-medium text-sm">{member.role}</p>
                                    </div>
                                </div>

                                {/* Body Content */}
                                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {member.bio}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        {member.credentials.map((cred, i) => (
                                            <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-500">
                                                <Award className="w-4 h-4 text-teal-500 shrink-0" />
                                                <span>{cred}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="pt-6 border-t border-slate-100 mt-auto flex items-center justify-between">
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
                                        >
                                            <Mail className="w-4 h-4" />
                                            Email
                                        </a>
                                        <button
                                            className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-indigo-600 transition-colors cursor-not-allowed"
                                            title="LinkedIn profile unavailable"
                                            aria-label="LinkedIn profile"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
