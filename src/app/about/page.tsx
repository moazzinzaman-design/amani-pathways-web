import {
    Heart,
    ShieldCheck,
    UserCheck,
    BookOpen,
    Users,
    Award,
    Sparkles,
    Star,
    CheckCircle2,
} from "lucide-react";

const values = [
    {
        icon: Heart,
        title: "Trauma-Informed Care",
        description:
            "Every interaction is guided by an understanding of trauma's impact. Our staff are trained in trauma-informed approaches, creating an environment of safety, trust, and empowerment.",
        gradient: "from-rose-500 to-rose-400",
        glow: "shadow-rose-500/20",
        bg: "bg-rose-50",
    },
    {
        icon: BookOpen,
        title: "Cultural Sensitivity",
        description:
            "We celebrate diversity and ensure young people's cultural, religious, and linguistic needs are respected and met through personalised support planning.",
        gradient: "from-amber-500 to-amber-400",
        glow: "shadow-amber-500/20",
        bg: "bg-amber-50",
    },
    {
        icon: Users,
        title: "Child-Centred Approach",
        description:
            "Each young person is at the heart of every decision. We listen to their voice, respect their wishes, and adapt our support to their unique circumstances.",
        gradient: "from-teal-500 to-teal-400",
        glow: "shadow-teal-500/20",
        bg: "bg-teal-50",
    },
];

const recruitmentSteps = [
    "Enhanced DBS checks for all staff and volunteers",
    "Comprehensive reference checks with previous employers",
    "Verified right-to-work documentation",
    "Mandatory safeguarding training (Level 3 minimum)",
    "Ongoing supervision and annual appraisals",
    "Continuous professional development programmes",
];

export default function AboutPage() {
    return (
        <>
            {/* Header */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 py-20 sm:py-28">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-teal-300 text-xs font-medium mb-6 border border-white/10">
                            <Sparkles className="w-3.5 h-3.5" />
                            Who We Are
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                            About{" "}
                            <span className="gradient-text">Amani Pathways</span>
                        </h1>
                        <p className="mt-5 text-lg text-slate-300/90 leading-relaxed max-w-2xl">
                            We are a dedicated team committed to providing the highest standard
                            of supported accommodation for unaccompanied asylum-seeking children,
                            guided by compassion, compliance, and cultural understanding.
                        </p>
                    </div>
                </div>
            </section>

            {/* Ethos */}
            <section className="py-20 sm:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold mb-4">
                            <Heart className="w-3 h-3" />
                            Our Values
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Our Trauma-Informed Ethos
                        </h2>
                        <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                            At Amani Pathways, we understand that every young person in our care
                            has experienced significant upheaval. Our entire service model is
                            designed around creating stability, safety, and a sense of belonging.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="group p-7 rounded-3xl bg-white border border-slate-100 card-hover"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 shadow-lg ${value.glow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    <value.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safer Recruitment */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 text-teal-600 rounded-full text-xs font-semibold mb-4">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                Safer Recruitment
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                                Rigorous Recruitment Standards
                            </h2>
                            <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                                Our safer recruitment policy exceeds statutory requirements.
                                Every member of staff undergoes a comprehensive vetting process
                                before they have any contact with young people.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-100 p-7 shadow-sm">
                            <ul className="space-y-4">
                                {recruitmentSteps.map((step, i) => (
                                    <li key={i} className="flex items-start gap-3.5 group">
                                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-teal-400 flex items-center justify-center shrink-0 shadow-md shadow-teal-500/15 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-sm text-slate-600 pt-1.5">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Personnel */}
            <section className="py-20 sm:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold mb-4">
                        <Star className="w-3 h-3" />
                        Leadership Team
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-10">
                        Key Roles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white card-hover">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/15 rounded-full blur-2xl" />
                            <div className="relative">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/15 transition-colors">
                                    <Award className="w-6 h-6 text-teal-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Nominated Individual</h3>
                                <p className="text-indigo-200 text-sm leading-relaxed">
                                    The Nominated Individual provides strategic oversight and ensures
                                    that the organisation meets all regulatory requirements set by
                                    Ofsted. They are responsible for the overall quality of care,
                                    liaising with the Registered Manager, and ensuring the service
                                    continuously improves. They maintain direct accountability to
                                    Ofsted and the company&apos;s board.
                                </p>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-teal-600 via-teal-500 to-teal-600 text-white card-hover">
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-400/20 rounded-full blur-2xl" />
                            <div className="relative">
                                <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/20 transition-colors">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">
                                    Registered Service Manager
                                </h3>
                                <p className="text-teal-100 text-sm leading-relaxed">
                                    The Registered Service Manager leads the day-to-day operations of
                                    the accommodation. They oversee staff supervision, care planning,
                                    safeguarding procedures, and are the primary point of contact for
                                    Local Authority social workers. They hold a Level 5 Diploma in
                                    Leadership & Management for Residential Childcare (or equivalent)
                                    and are registered with Ofsted.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
