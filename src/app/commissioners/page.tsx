"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Shield,
    Users,
    Clock,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    ChevronDown,
    Phone,
    Mail,
    FileText,
    Zap,
    AlertTriangle,
    HeartHandshake,
    Star,
    ClipboardList,
    Building2,
    UserCheck,
    BadgeCheck,
} from "lucide-react";
import DownloadableAsset from "@/components/DownloadableAsset";

/* ─── Data ─────────────────────────────────────────────────── */

const criteria = [
    {
        icon: Users,
        title: "Age Range",
        detail: "Young people aged 16–17",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        icon: Shield,
        title: "Placement Type",
        detail: "UASC — Unaccompanied Asylum-Seeking Children",
        color: "text-rose-600",
        bg: "bg-rose-50",
    },
    {
        icon: Building2,
        title: "Placing Authorities",
        detail: "Any UK Local Authority with statutory responsibilities",
        color: "text-teal-600",
        bg: "bg-teal-50",
    },
    {
        icon: Clock,
        title: "Placement Duration",
        detail: "Short-term, medium-term & long-term placements",
        color: "text-amber-600",
        bg: "bg-amber-50",
    },
    {
        icon: HeartHandshake,
        title: "Support Needs",
        detail: "Low to medium complexity; trauma-informed specialist support",
        color: "text-violet-600",
        bg: "bg-violet-50",
    },
    {
        icon: Zap,
        title: "Emergency Placements",
        detail: "Emergency & same-day placements considered (subject to capacity)",
        color: "text-sky-600",
        bg: "bg-sky-50",
    },
];

const referralProcess = [
    {
        step: "01",
        title: "Initial Enquiry",
        description:
            "Contact our placement team by phone or email to discuss the young person's needs and check current capacity.",
        icon: Phone,
        color: "from-indigo-600 to-indigo-500",
    },
    {
        step: "02",
        title: "Referral Form",
        description:
            "Complete and submit our referral form with the young person's details, presenting needs, and any risk information.",
        icon: ClipboardList,
        color: "from-teal-500 to-teal-400",
    },
    {
        step: "03",
        title: "Assessment & Matching",
        description:
            "Our registered manager reviews the referral and assesses suitability for our provision and existing residents.",
        icon: UserCheck,
        color: "from-amber-500 to-amber-400",
    },
    {
        step: "04",
        title: "Placement Agreement",
        description:
            "We issue a placement agreement with costings, support plan outline, and house rules for LA sign-off.",
        icon: FileText,
        color: "from-rose-500 to-rose-400",
    },
    {
        step: "05",
        title: "Arrival & Welcome",
        description:
            "A planned, supported arrival with a dedicated key worker and immediate safety and wellbeing assessment.",
        icon: BadgeCheck,
        color: "from-violet-500 to-violet-400",
    },
];

const keyFacts = [
    { label: "Registered with", value: "Ofsted" },
    { label: "Bedrooms", value: "5" },
    { label: "Staffing", value: "24/7" },
    { label: "Location", value: "Halifax, W. Yorkshire" },
    { label: "Min. age", value: "16" },
    { label: "Max. age", value: "17" },
];

const faqs = [
    {
        question: "What is your current capacity?",
        answer:
            "We operate a 5-bedroom home registered with Ofsted. Current availability is shared directly with placing authorities on enquiry to ensure accuracy. Please contact our placement team for an up-to-date vacancy position.",
    },
    {
        question: "Do you accept emergency placements?",
        answer:
            "Yes — we consider emergency and same-day placements subject to current capacity and a brief risk assessment to ensure the safety of all existing residents. Please call our placement team directly for the fastest response.",
    },
    {
        question: "What is your staffing ratio?",
        answer:
            "We maintain 24/7 staffing with waking night cover. During the day we operate a minimum 1:3 staff-to-young-person ratio, with additional staffing for young people with higher needs. All staff hold relevant Level 3 qualifications minimum.",
    },
    {
        question: "How do you handle safeguarding concerns and crisis situations?",
        answer:
            "We have a robust safeguarding policy aligned with Working Together 2023. All staff are trained in de-escalation and positive behaviour support. We maintain 24/7 on-call management support, and any Section 47 concerns are reported immediately to the relevant Local Authority MASH team.",
    },
    {
        question: "Are you experienced with young people from specific countries or regions?",
        answer:
            "Yes — we have supported young people from Afghanistan, Eritrea, Sudan, Albania, Iran, and Vietnam, amongst others. Our staff includes team members with linguistic skills and cultural competencies across several of these communities. We work closely with community and faith organisations to provide culturally appropriate support.",
    },
    {
        question: "What documentation do you provide to the Local Authority?",
        answer:
            "We provide a comprehensive monthly progress report for each young person, covering wellbeing, education engagement, key-worker session summaries, any incidents, and progress against their support plan. We also produce statutory documentation including Risk Assessments, Pathway Plans, and PEP contributions.",
    },
    {
        question: "What are your daily/weekly rates?",
        answer:
            "Our fees are competitive and reflective of our high staffing ratios and comprehensive support offer. Rates are provided on enquiry and are negotiated with individual Local Authorities. We work within standard national cost frameworks for supported accommodation.",
    },
    {
        question: "Are you registered and inspected by Ofsted?",
        answer:
            "Yes. Amani Pathways Ltd is registered with Ofsted as a supported accommodation provider. All placements are made within our registered provisions only. Our compliance documentation, including our Statement of Purpose, is available on request.",
    },
    {
        question: "What education support do you provide?",
        answer:
            "We actively support and facilitate access to ESOL courses at local colleges, assist with school enrolment where applicable, attend education reviews, and support young people with homework and skills building at home. We liaise directly with education providers and Virtual School Heads.",
    },
    {
        question: "How do you support mental health needs?",
        answer:
            "Our approach is trauma-informed at every level. We facilitate CAMHS referrals, support access to IAPT services, and work with specialist organisations such as Barnardo's and NSPCC where appropriate. Key workers provide regular wellbeing check-ins and we use validated tools to monitor mental health outcomes.",
    },
];

/* ─── FAQ Accordion Item ────────────────────────────────────── */

function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-slate-50 transition-colors duration-200"
            >
                <span className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                    {question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-indigo-500 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            {open && (
                <div className="px-6 pb-6">
                    <div className="pt-0 border-t border-slate-100 pt-4">
                        <p className="text-sm text-slate-600 leading-relaxed">{answer}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function CommissionersPage() {
    return (
        <>
            {/* Header */}
            <section className="relative overflow-hidden noise-bg bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 py-20 sm:py-28">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-3xl" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                            backgroundSize: "60px 60px",
                        }}
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-teal-300 text-xs font-medium mb-6 border border-white/10">
                            <Sparkles className="w-3.5 h-3.5" />
                            For Local Authorities &amp; Social Workers
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                            Commissioner{" "}
                            <span className="gradient-text">Information</span>
                        </h1>
                        <p className="mt-5 text-lg text-slate-300/90 leading-relaxed max-w-2xl">
                            Everything a placing authority needs to know about Amani Pathways —
                            our capacity, criteria, referral process, and frequently asked questions.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="mailto:referrals@amanipathways.co.uk"
                                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-teal-500 to-teal-400 text-white font-semibold rounded-2xl shadow-lg shadow-teal-500/25 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
                            >
                                <Mail className="w-4 h-4" />
                                referrals@amanipathways.co.uk
                            </a>
                            <Link
                                href="/referrals"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300"
                            >
                                Make a Formal Referral
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Facts Strip */}
            <section className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-wrap justify-center gap-6">
                        {keyFacts.map((fact) => (
                            <div key={fact.label} className="text-center">
                                <div className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
                                    {fact.value}
                                </div>
                                <div className="text-xs text-slate-500 mt-0.5">{fact.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Placement Criteria */}
            <section className="py-20 sm:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold mb-4">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Placement Criteria
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Who We Can Support
                        </h2>
                        <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                            Our provision is specifically designed and registered to support
                            unaccompanied asylum-seeking young people aged 16–17.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {criteria.map((c) => (
                            <div
                                key={c.title}
                                className="group flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 card-hover"
                            >
                                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    <c.icon className={`w-5 h-5 ${c.color}`} />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                                        {c.title}
                                    </p>
                                    <p className="text-sm font-medium text-slate-800 leading-snug">
                                        {c.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Safeguarding notice */}
                    <div className="mt-8 flex items-start gap-4 p-5 rounded-2xl bg-amber-50 border border-amber-200/60">
                        <div className="w-9 h-9 rounded-xl bg-amber-200/60 flex items-center justify-center shrink-0">
                            <AlertTriangle className="w-4 h-4 text-amber-700" />
                        </div>
                        <p className="text-sm text-amber-800">
                            <strong>Safeguarding Notice:</strong> For the protection of young
                            people in our care, the specific address of our provision is not
                            published publicly. Location details are shared only with
                            authorised local authority professionals following a confirmed
                            placement agreement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Referral Process */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 text-teal-600 rounded-full text-xs font-semibold mb-4">
                            <ClipboardList className="w-3 h-3" />
                            Referral Process
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            How to Make a Referral
                        </h2>
                        <p className="mt-4 text-slate-500 text-lg">
                            Our streamlined five-step process ensures swift, safe placements
                            for young people in need of support.
                        </p>
                    </div>

                    <div className="space-y-4 max-w-3xl mx-auto">
                        {referralProcess.map((step, i) => (
                            <div key={step.step} className="group flex gap-5 p-6 bg-white rounded-2xl border border-slate-100 card-hover">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex flex-col items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    <step.icon className="w-5 h-5 text-white" />
                                    <span className="text-white/70 text-[9px] font-bold mt-0.5">{step.step}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                                </div>
                                {i < referralProcess.length - 1 && (
                                    <div className="hidden sm:flex items-center">
                                        <ArrowRight className="w-4 h-4 text-slate-300" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Link
                            href="/referrals"
                            className="group inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-500 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <Sparkles className="w-4 h-4" />
                            Start a Formal Referral
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-20 sm:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        {/* What LA gets */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold mb-4">
                                <Star className="w-3 h-3" />
                                What's Included
                            </div>
                            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
                                Our Service Offer to Placing Authorities
                            </h2>
                            <ul className="space-y-3.5">
                                {[
                                    "Dedicated named key worker for each young person",
                                    "Monthly written progress reports to the placing LA",
                                    "Attendance at Looked After Children (LAC) reviews",
                                    "Pathway Planning contributions and support",
                                    "24/7 on-call management for emergencies",
                                    "Support at asylum interviews & Home Office reporting",
                                    "ESOL & education enrolment facilitation",
                                    "Mental health referrals & ongoing wellbeing support",
                                    "Life skills programme delivery",
                                    "Cultural and religious needs assessment & accommodation",
                                    "Secure transfer-of-information protocols",
                                    "Statement of Purpose available on request",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 group">
                                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-500 to-teal-400 flex items-center justify-center shrink-0 shadow-sm shadow-teal-500/20 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <span className="text-sm text-slate-700 pt-1 leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact card */}
                        <div className="space-y-5">
                            <div className="relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl" />
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                                        <Mail className="w-5 h-5 text-teal-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                        Our placement team is available Monday–Friday 9am–5pm, with
                                        24/7 emergency contact for existing placements.
                                    </p>
                                    <a
                                        href="mailto:referrals@amanipathways.co.uk"
                                        className="block w-full text-center px-5 py-3 bg-gradient-to-r from-teal-500 to-teal-400 text-white font-semibold rounded-xl text-sm hover:shadow-lg transition-all"
                                    >
                                        referrals@amanipathways.co.uk
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <h4 className="font-bold text-slate-800 text-lg mb-2">Key Documents</h4>
                                <DownloadableAsset
                                    title="Information Pack 2026 (All Docs)"
                                    description="A summary of our Statement of Purpose, capacity, and core offer for Commissioners."
                                    fileName="Amani_Pathways_Information_Pack_2026_Updated.zip"
                                    fileSize="81 KB"
                                    fileUrl="/documents/Amani_Pathways_Information_Pack_2026_Updated.zip"
                                />
                                <DownloadableAsset
                                    title="Statement of Purpose"
                                    description="Our full Ofsted-aligned Statement of Purpose detailing our ethos and provisions."
                                    fileName="Amani_Pathways_Statement_of_Purpose.docx"
                                    fileSize="18 KB"
                                    fileUrl="/documents/Amani_Pathways_Statement_of_Purpose.docx"
                                />
                                <DownloadableAsset
                                    title="Safeguarding Policy"
                                    description="Our comprehensive approach to protecting young people, updated for 2026 guidelines."
                                    fileName="Amani_Pathways_Safeguarding_Policy.docx"
                                    fileSize="19 KB"
                                    fileUrl="/documents/Amani_Pathways_Safeguarding_Policy.docx"
                                />
                                <DownloadableAsset
                                    title="Resident's Welcome Pack"
                                    description="A preview of the guide given to every young person upon arriving at Amani Pathways."
                                    fileName="Amani_Pathways_Welcome_Pack.docx"
                                    fileSize="19 KB"
                                    fileUrl="/documents/Amani_Pathways_Welcome_Pack.docx"
                                />
                                <DownloadableAsset
                                    title="Pricing & Financial Plan"
                                    description="Detailed breakdown of our core placement costs and financial trajectory."
                                    fileName="Amani_Pathways_Financial_Timeline.docx"
                                    fileSize="18 KB"
                                    fileUrl="/documents/Amani_Pathways_Financial_Timeline.docx"
                                />
                                <DownloadableAsset
                                    title="Positive Behaviour Policy"
                                    description="Our behaviour management protocols and conflict resolution mechanisms."
                                    fileName="Amani_Pathways_Positive_Behaviour_Policy.docx"
                                    fileSize="19 KB"
                                    fileUrl="/documents/Amani_Pathways_Positive_Behaviour_Policy.docx"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold mb-4">
                            <CheckCircle2 className="w-3 h-3" />
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Common Commissioner{" "}
                            <span className="gradient-text">Questions</span>
                        </h2>
                        <p className="mt-4 text-slate-500 text-lg">
                            Answers to the questions placing authorities ask us most often.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-3">
                        {faqs.map((faq, i) => (
                            <FaqItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-slate-500 text-sm mb-4">
                            Have a question not answered here?
                        </p>
                        <a
                            href="mailto:referrals@amanipathways.co.uk"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl text-sm hover:bg-slate-800 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Contact our team directly
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
