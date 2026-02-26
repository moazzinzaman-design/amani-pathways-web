"use client";

import {
    Shield,
    Clock,
    AlertTriangle,
    FileSearch,
    GraduationCap,
    ClipboardCheck,
    Eye,
    Scale,
    Sparkles,
    CheckCircle2,
    Zap,
} from "lucide-react";
import GlowingOrbs from "@/components/GlowingOrbs";
import SweepRevealText from "@/components/SweepRevealText";
import TiltCard from "@/components/TiltCard";
import { motion, useScroll, useTransform } from "framer-motion";

const frameworks = [
    {
        icon: Scale,
        title: "Supported Accommodation Regulations 2023",
        description:
            "Full compliance with The Supported Accommodation (England) Regulations 2023, including Quality Standards.",
        gradient: "from-indigo-600 to-indigo-500",
    },
    {
        icon: Eye,
        title: "Ofsted Inspection Framework",
        description:
            "Structured to meet the three overarching areas: Leadership & Management, Protection, and Accommodation & Support.",
        gradient: "from-teal-500 to-teal-400",
    },
    {
        icon: ClipboardCheck,
        title: "Children Act 1989 & 2004",
        description:
            "All practices underpinned by the Children Act, ensuring the welfare of each child is paramount.",
        gradient: "from-amber-500 to-amber-400",
    },
    {
        icon: GraduationCap,
        title: "Working Together 2023",
        description:
            "Staff trained in line with the latest statutory guidance on inter-agency working to safeguard children.",
        gradient: "from-rose-500 to-rose-400",
    },
];

const protocols = [
    {
        icon: Clock,
        title: "24/7 Staffing Model",
        color: "indigo",
        items: [
            "Minimum of two awake night staff at all times",
            "Senior on-call manager available around the clock",
            "Staff-to-young-person ratios exceed minimums",
            "Shift handover with detailed briefings",
            "Regular unannounced management spot-checks",
        ],
    },
    {
        icon: AlertTriangle,
        title: "Missing Child Protocol",
        color: "rose",
        items: [
            "Immediate response within 15 minutes of concern",
            "Liaison with police, social workers, and placing authority",
            "Detailed recording and risk assessment updates",
            "Return home interviews within 72 hours",
            "Debrief and prevention strategy review",
        ],
    },
    {
        icon: FileSearch,
        title: "Risk Assessment Framework",
        color: "teal",
        items: [
            "Individual risk assessments on admission and review",
            "Dynamic environmental risk assessments",
            "Exploitation and trafficking risk screening (NRM)",
            "Monthly safeguarding audits and incident analysis",
            "Multi-agency safeguarding partnership engagement",
        ],
    },
];

const colorMap: Record<string, { dot: string; border: string; bg: string; icon: string }> = {
    indigo: { dot: "bg-indigo-500", border: "border-indigo-200", bg: "bg-indigo-50", icon: "text-indigo-500" },
    rose: { dot: "bg-rose-500", border: "border-rose-200", bg: "bg-rose-50", icon: "text-rose-500" },
    teal: { dot: "bg-teal-500", border: "border-teal-200", bg: "bg-teal-50", icon: "text-teal-500" },
};

const training = [
    { name: "Safeguarding Level 3", required: true },
    { name: "Trauma-Informed Care", required: true },
    { name: "Modern Slavery & Trafficking", required: true },
    { name: "First Aid & Medication", required: false },
    { name: "Fire Safety & Emergency", required: false },
    { name: "Mental Health First Aid", required: false },
    { name: "Cultural Competency", required: false },
    { name: "Behaviour & De-escalation", required: false },
    { name: "Data Protection (GDPR)", required: false },
];

export default function CompliancePage() {
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, 50]);

    return (
        <>
            {/* Header */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 py-20 sm:py-28">
                <GlowingOrbs />
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-rose-500/8 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div style={{ y: yHero }} className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-teal-300 text-xs font-medium mb-6 border border-white/10">
                            <Shield className="w-3.5 h-3.5" />
                            For Ofsted Inspectors & Commissioners
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                            <SweepRevealText delay={0.1}>
                                Compliance &{" "}
                                <span className="gradient-text">Safeguarding</span>
                            </SweepRevealText>
                        </h1>
                        <p className="mt-5 text-lg text-slate-300/90 leading-relaxed max-w-2xl">
                            Our commitment to safeguarding is absolute. This page outlines our
                            regulatory compliance, safeguarding protocols, and quality assurance
                            processes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Regulatory */}
            <section className="py-20 sm:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold mb-4">
                            <Scale className="w-3 h-3" />
                            Legal Framework
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Regulatory Framework
                        </h2>
                        <p className="mt-4 text-slate-500 text-lg">
                            We operate within a comprehensive regulatory framework ensuring full
                            compliance with all relevant legislation and guidance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {frameworks.map((item) => (
                            <TiltCard key={item.title} className="group p-7 rounded-3xl bg-white border border-slate-100 card-hover shadow-neon">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {item.description}
                                </p>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Protocols */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-50 text-rose-600 rounded-full text-xs font-semibold mb-4">
                            <Sparkles className="w-3 h-3" />
                            Procedures
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Safeguarding Protocols
                        </h2>
                        <p className="mt-4 text-slate-500 text-lg">
                            Designed to prevent harm, respond swiftly to concerns, and ensure
                            continuous learning and improvement.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {protocols.map((protocol) => {
                            const colors = colorMap[protocol.color];
                            return (
                                <TiltCard key={protocol.title} className={`p-7 bg-white rounded-3xl border ${colors.border} hover:shadow-xl transition-all duration-300 shadow-neon`}>
                                    <div className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center mb-5`}>
                                        <protocol.icon className={`w-6 h-6 ${colors.icon}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-5">
                                        {protocol.title}
                                    </h3>
                                    <ul className="space-y-3.5">
                                        {protocol.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className={`w-2 h-2 rounded-full ${colors.dot} mt-1.5 shrink-0`} />
                                                <span className="text-sm text-slate-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </TiltCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Training */}
            <section className="py-20 sm:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 rounded-3xl p-10 sm:p-14">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl" />

                        <div className="relative">
                            <div className="flex items-center gap-2 mb-2">
                                <Zap className="w-4 h-4 text-teal-400" />
                                <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">
                                    Professional Development
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
                                Staff Training & Development
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {training.map((item, i) => (
                                    <div
                                        key={i}
                                        className="group flex items-center gap-3 px-4 py-3.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all duration-200"
                                    >
                                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${item.required ? "text-teal-400" : "text-indigo-400"}`} />
                                        <span className="text-sm text-slate-200">{item.name}</span>
                                        {item.required && (
                                            <span className="ml-auto px-2 py-0.5 bg-teal-500/20 text-teal-300 text-[10px] font-bold rounded-full">
                                                REQ
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
