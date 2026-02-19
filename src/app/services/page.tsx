import {
    Home,
    Clock,
    BookOpen,
    Landmark,
    ChefHat,
    Brain,
    Handshake,
    Globe,
    Shield,
    Users,
    Sparkles,
    AlertTriangle,
} from "lucide-react";

const accommodation = [
    {
        icon: Home,
        title: "5-Bedroom Home",
        description:
            "A spacious, well-maintained property with individual bedrooms, shared communal living areas, and a fully equipped kitchen.",
        gradient: "from-indigo-600 to-indigo-500",
    },
    {
        icon: Shield,
        title: "Safe & Secure",
        description:
            "The property is equipped with appropriate safety measures. For safeguarding, specific location details are not published.",
        gradient: "from-rose-500 to-rose-400",
    },
    {
        icon: Clock,
        title: "24/7 Staffing",
        description:
            "Trained residential support workers are present around the clock to provide guidance, support, and supervision.",
        gradient: "from-teal-500 to-teal-400",
    },
    {
        icon: Users,
        title: "Culturally Sensitive",
        description:
            "The home respects cultural, religious, and dietary needs, creating a welcoming and inclusive environment for all residents.",
        gradient: "from-amber-500 to-amber-400",
    },
];

const supportServices = [
    {
        icon: BookOpen,
        title: "ESOL Enrollment",
        description:
            "We facilitate enrollment into English for Speakers of Other Languages (ESOL) courses at local colleges.",
        color: "text-indigo-500",
        bg: "bg-indigo-50",
    },
    {
        icon: Landmark,
        title: "Home Office Support",
        description:
            "Staff accompany young people to asylum interviews, legal appointments, and Home Office reporting.",
        color: "text-rose-500",
        bg: "bg-rose-50",
    },
    {
        icon: ChefHat,
        title: "Life Skills Coaching",
        description:
            "Practical sessions covering cooking, budgeting, personal hygiene, public transport, and household tasks.",
        color: "text-amber-500",
        bg: "bg-amber-50",
    },
    {
        icon: Brain,
        title: "Mental Health",
        description:
            "Access to counselling, therapeutic interventions, and wellbeing activities to support recovery.",
        color: "text-teal-500",
        bg: "bg-teal-50",
    },
    {
        icon: Handshake,
        title: "Key-Worker Sessions",
        description:
            "Dedicated key worker providing regular 1:1 sessions to set goals, track progress, and provide advocacy.",
        color: "text-sky-500",
        bg: "bg-sky-50",
    },
    {
        icon: Globe,
        title: "Community Integration",
        description:
            "Active support for young people to engage with their local community through volunteering and sports.",
        color: "text-indigo-500",
        bg: "bg-indigo-50",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Header */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 py-20 sm:py-28">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-teal-300 text-xs font-medium mb-6 border border-white/10">
                            <Sparkles className="w-3.5 h-3.5" />
                            What We Provide
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                            Accommodation &{" "}
                            <span className="gradient-text">Support</span>
                        </h1>
                        <p className="mt-5 text-lg text-slate-300/90 leading-relaxed max-w-2xl">
                            Our service combines high-quality accommodation with comprehensive
                            support, designed to help young people build the skills and confidence
                            they need for independent living.
                        </p>
                    </div>
                </div>
            </section>

            {/* Accommodation */}
            <section className="py-20 sm:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold mb-4">
                            <Home className="w-3 h-3" />
                            Our Property
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Our Accommodation
                        </h2>
                        <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                            We provide a warm, safe, and welcoming home environment maintained
                            to a high standard, with regular inspections and a focus on creating
                            a space that feels like home.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {accommodation.map((item) => (
                            <div
                                key={item.title}
                                className="group flex gap-5 p-6 rounded-3xl bg-white border border-slate-100 card-hover"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Safeguarding Note */}
                    <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/60">
                        <p className="text-sm text-amber-800 flex items-start gap-3">
                            <div className="w-8 h-8 rounded-xl bg-amber-200/50 flex items-center justify-center shrink-0">
                                <AlertTriangle className="w-4 h-4 text-amber-600" />
                            </div>
                            <span className="pt-1">
                                <strong>Safeguarding Notice:</strong> For the safety and privacy
                                of young people in our care, we do not publish the specific
                                address or location of our accommodation. Location details are
                                shared only with authorised Local Authority professionals.
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Support Services */}
            <section className="py-20 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 text-teal-600 rounded-full text-xs font-semibold mb-4">
                            <Handshake className="w-3 h-3" />
                            Holistic Support
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Our Support Services
                        </h2>
                        <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                            We take a holistic approach addressing education, wellbeing,
                            practical life skills, and community integration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {supportServices.map((service) => (
                            <div
                                key={service.title}
                                className="group p-7 bg-white rounded-3xl border border-slate-100 card-hover"
                            >
                                <div className={`w-12 h-12 rounded-2xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className={`w-6 h-6 ${service.color}`} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
