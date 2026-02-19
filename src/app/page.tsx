import Link from "next/link";
import {
  Shield,
  Users,
  Home,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Star,
  Zap,
  Globe,
} from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Leadership",
    description:
      "Experienced management delivering strategic oversight, Ofsted compliance, and a culture of continuous improvement.",
    gradient: "from-indigo-600 to-indigo-500",
    glow: "shadow-indigo-500/20",
    badge: "Strategic",
  },
  {
    icon: Shield,
    title: "Protection",
    description:
      "Robust safeguarding, DBS-checked staff, 24/7 supervision, and rigorous risk assessment frameworks.",
    gradient: "from-rose-500 to-rose-400",
    glow: "shadow-rose-500/20",
    badge: "Safeguarding",
  },
  {
    icon: Home,
    title: "Accommodation",
    description:
      "A high-quality, 5-bedroom home providing safe, warm, and culturally sensitive living environments.",
    gradient: "from-teal-500 to-teal-400",
    glow: "shadow-teal-500/20",
    badge: "Quality",
  },
  {
    icon: HeartHandshake,
    title: "Support",
    description:
      "Personalised pathways including ESOL, life-skills coaching, mental health support, and transition planning.",
    gradient: "from-amber-500 to-amber-400",
    glow: "shadow-amber-500/20",
    badge: "Holistic",
  },
];

const highlights = [
  { text: "Ofsted regulated", icon: Shield },
  { text: "Trauma-informed care", icon: HeartHandshake },
  { text: "24/7 staffing", icon: Zap },
  { text: "Culturally sensitive", icon: Globe },
  { text: "Key-worker sessions", icon: Users },
  { text: "Pathway to independence", icon: Star },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 -mt-16 lg:-mt-18 pt-16 lg:pt-18">
        {/* Animated decorative orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-3xl animate-float" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-teal-300 text-xs font-medium mb-8 border border-white/10 animate-fade-up">
              <Sparkles className="w-3.5 h-3.5" />
              Ofsted Regulated • Halifax, West Yorkshire
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight animate-fade-up">
              Empowering Young People to Build{" "}
              <span className="gradient-text">Independent Futures</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300/90 leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Amani Pathways provides trauma-informed, high-quality supported
              accommodation for Unaccompanied Asylum-Seeking Children aged 16–17,
              helping them navigate their journey towards independence, safety,
              and belonging.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Link
                href="/referrals"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-indigo-500 via-indigo-500 to-teal-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl shadow-indigo-500/25 hover:shadow-2xl hover:shadow-indigo-500/40 hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-indigo-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">Make a Referral</span>
                <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="hidden lg:flex absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 flex-col gap-4">
            {[
              { label: "Staffing", value: "24/7", color: "from-teal-500 to-teal-400" },
              { label: "Bedrooms", value: "5", color: "from-indigo-500 to-indigo-400" },
              { label: "Ofsted", value: "✓", color: "from-amber-500 to-amber-400" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`glass-dark rounded-2xl p-4 w-32 text-center animate-float${i === 1 ? "-slow" : ""}`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div className={`text-2xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative h-16 sm:h-24">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="bg-slate-50 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 text-sm text-slate-600 hover:shadow-md hover:border-indigo-200 transition-all duration-300"
              >
                <item.icon className="w-4 h-4 text-indigo-500 shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold mb-4">
              <Zap className="w-3 h-3" />
              Our Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Four Pillars of{" "}
              <span className="gradient-text">Excellence</span>
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              Every aspect of our service is built on these core principles,
              ensuring the highest standards of care and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="group relative p-6 bg-white rounded-3xl border border-slate-100 card-hover"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Top badge */}
                <div className="absolute -top-2.5 right-5">
                  <span className={`px-2.5 py-0.5 bg-gradient-to-r ${pillar.gradient} text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-md ${pillar.glow}`}>
                    {pillar.badge}
                  </span>
                </div>

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-5 shadow-lg ${pillar.glow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                >
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 rounded-3xl p-10 sm:p-16">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute top-10 right-10 animate-spin-slow opacity-10">
              <svg width="120" height="120" viewBox="0 0 120 120"><circle cx="60" cy="60" r="55" stroke="white" strokeWidth="1" fill="none" strokeDasharray="8 6" /></svg>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  <span className="text-teal-400 text-sm font-medium">
                    For Local Authority Commissioners & Social Workers
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Ready to Make a Referral?
                </h2>
                <p className="mt-4 text-slate-300 text-lg max-w-xl">
                  Contact us today to discuss a placement or learn more about how
                  Amani Pathways can support children in your care.
                </p>
              </div>
              <Link
                href="/referrals"
                className="shrink-0 group relative inline-flex items-center gap-2.5 px-10 py-5 bg-gradient-to-r from-teal-500 to-teal-400 text-white font-bold rounded-2xl text-lg transition-all duration-300 shadow-2xl shadow-teal-500/30 hover:shadow-teal-400/50 hover:-translate-y-1 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">Start a Referral</span>
                <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
