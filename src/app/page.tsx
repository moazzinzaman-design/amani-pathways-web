"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Shield, Users, Home, HeartHandshake, ArrowRight, CheckCircle2,
  Sparkles, Zap, Globe, Heart, Eye, Handshake, Scale,
  Lightbulb, Lock, ChevronRight, ClipboardList, Compass,
  GraduationCap, HouseIcon,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import Typewriter from "@/components/Typewriter";

/* ─── Data ──────────────────────────────────────────────────── */

const pillars = [
  { icon: Users, title: "Leadership", description: "Experienced management delivering strategic oversight, Ofsted compliance, and a culture of continuous improvement.", gradient: "from-indigo-600 to-indigo-500", glow: "shadow-indigo-500/20", badge: "Strategic" },
  { icon: Shield, title: "Protection", description: "Robust safeguarding, DBS-checked staff, 24/7 supervision, and rigorous risk assessment frameworks.", gradient: "from-rose-500 to-rose-400", glow: "shadow-rose-500/20", badge: "Safeguarding" },
  { icon: Home, title: "Accommodation", description: "A high-quality, 5-bedroom home providing safe, warm, and culturally sensitive living environments.", gradient: "from-teal-500 to-teal-400", glow: "shadow-teal-500/20", badge: "Quality" },
  { icon: HeartHandshake, title: "Support", description: "Personalised pathways including ESOL, life-skills coaching, mental health support, and transition planning.", gradient: "from-amber-500 to-amber-400", glow: "shadow-amber-500/20", badge: "Holistic" },
];

const highlights = [
  { text: "Ofsted regulated", icon: Shield },
  { text: "Trauma-informed care", icon: HeartHandshake },
  { text: "24/7 staffing", icon: Zap },
  { text: "Culturally sensitive", icon: Globe },
  { text: "Key-worker sessions", icon: Users },
  { text: "Pathway to independence", icon: Star },
];

const coreValues = [
  { icon: Shield, title: "Safety First", description: "Every decision prioritises the physical and emotional safety of the young people in our care. Robust safeguarding is non-negotiable.", gradient: "from-rose-500 to-rose-400", bg: "bg-rose-50", color: "text-rose-600", border: "border-rose-100" },
  { icon: Heart, title: "Unconditional Respect", description: "We honour each young person's identity, culture, religion, and language. Every individual is treated with dignity and compassion.", gradient: "from-pink-500 to-rose-400", bg: "bg-pink-50", color: "text-pink-600", border: "border-pink-100" },
  { icon: Lightbulb, title: "Empowerment", description: "We build confidence and capability, giving young people the tools, skills, and agency to shape their own futures independently.", gradient: "from-amber-500 to-amber-400", bg: "bg-amber-50", color: "text-amber-600", border: "border-amber-100" },
  { icon: Eye, title: "Transparency", description: "We communicate openly with young people, their families, and commissioners — maintaining honest, clear records and reporting.", gradient: "from-teal-500 to-teal-400", bg: "bg-teal-50", color: "text-teal-600", border: "border-teal-100" },
  { icon: Handshake, title: "Collaboration", description: "We work in true partnership with local authorities, legal teams, healthcare providers, and communities for the best outcomes.", gradient: "from-indigo-600 to-indigo-500", bg: "bg-indigo-50", color: "text-indigo-600", border: "border-indigo-100" },
  { icon: Scale, title: "Integrity", description: "We hold ourselves to the highest professional and ethical standards — doing the right thing, especially when it's difficult.", gradient: "from-violet-500 to-violet-400", bg: "bg-violet-50", color: "text-violet-600", border: "border-violet-100" },
];

const pathwaySteps = [
  { step: "01", icon: ClipboardList, title: "Referral & Matching", description: "Local Authority submits a referral. We assess suitability, capacity, and conduct a thorough matching process.", color: "from-indigo-600 to-indigo-500", glow: "shadow-indigo-500/25" },
  { step: "02", icon: Home, title: "Arrival & Welcome", description: "A warm, prepared welcome with a dedicated key worker, needs assessment, and immediate support.", color: "from-teal-500 to-teal-400", glow: "shadow-teal-500/25" },
  { step: "03", icon: Compass, title: "Personalised Support Plan", description: "A bespoke pathway plan co-created with the young person covering education, health, legal status and wellbeing.", color: "from-amber-500 to-amber-400", glow: "shadow-amber-500/25" },
  { step: "04", icon: GraduationCap, title: "Skills & Growth", description: "ESOL classes, life-skills coaching, mental health support, and regular key-worker sessions drive progress.", color: "from-rose-500 to-rose-400", glow: "shadow-rose-500/25" },
  { step: "05", icon: HouseIcon, title: "Transition to Independence", description: "A carefully managed move-on plan prepares the young person for independent living with ongoing aftercare.", color: "from-violet-500 to-violet-400", glow: "shadow-violet-500/25" },
];



const heroWords = [
  "Independent Futures",
  "Confident Lives",
  "Belonging & Safety",
  "Lasting Pathways",
];

/* ─── UPGRADE #8 — Parallax orbs hook ─────────────────────── */
function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Cache references once rather than querying every scroll tick
    const orb1 = el.querySelector<HTMLElement>("[data-parallax='1']");
    const orb2 = el.querySelector<HTMLElement>("[data-parallax='2']");
    const orb3 = el.querySelector<HTMLElement>("[data-parallax='3']");

    let rafId: number | null = null;
    let lastScroll = window.scrollY;
    let dirty = false;

    const handleScroll = () => {
      lastScroll = window.scrollY;
      dirty = true;
    };

    const tick = () => {
      if (dirty) {
        dirty = false;
        // Only apply parallax while the hero section is near the viewport
        if (lastScroll < window.innerHeight * 1.5) {
          if (orb1) orb1.style.transform = `translateY(${lastScroll * 0.18}px)`;
          if (orb2) orb2.style.transform = `translateY(${lastScroll * -0.12}px)`;
          if (orb3) orb3.style.transform = `translateY(${lastScroll * 0.09}px)`;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    rafId = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);
  return ref;
}


/* ─── Page ──────────────────────────────────────────────────── */

export default function HomePage() {
  const heroRef = useParallax();

  return (
    <>
      {/* ── HERO ── with spotlight + parallax orbs ──────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 -mt-16 lg:-mt-18 pt-16 lg:pt-18 spotlight-container"
      >
        {/* Spotlight element (driven by CursorSpotlight.tsx) */}
        <div className="spotlight" style={{ opacity: 0 }} />

        {/* UPGRADE #8 — Parallax decorative orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div data-parallax="1" className="absolute top-20 left-10 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl animate-float" />
          <div data-parallax="2" className="absolute top-40 right-20 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-3xl animate-float-slow" />
          <div data-parallax="3" className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* UPGRADE #7 — Staggered fade-up entrance */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-teal-300 text-xs font-medium mb-8 border border-white/10 animate-fade-up">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Ofsted Regulated • Halifax, West Yorkshire
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight animate-fade-up" style={{ animationDelay: "0.08s" }}>
              Empowering Young People to Build{" "}
              {/* UPGRADE #10 — Typewriter effect on key phrase */}
              <span className="gradient-text">
                <Typewriter words={heroWords} typeSpeed={55} deleteSpeed={30} pauseAfter={2400} />
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300/90 leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: "0.16s" }}>
              Amani Pathways provides trauma-informed, high-quality supported
              accommodation for Unaccompanied Asylum-Seeking Children aged 16–17,
              helping them navigate their journey towards independence, safety,
              and belonging.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.24s" }}>
              {/* UPGRADE #5 — Animated gradient border + btn-pulse */}
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

          {/* Floating stat cards — UPGRADE #6 CountUp */}
          <div className="hidden lg:flex absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 flex-col gap-4">
            {[
              { label: "Staffing", display: null, text: "24/7", color: "from-teal-500 to-teal-400", delay: 0 },
              { label: "Bedrooms", display: 5, text: null, color: "from-indigo-500 to-indigo-400", delay: 300 },
              { label: "Ofsted", display: null, text: "✓", color: "from-amber-500 to-amber-400", delay: 600 },
            ].map((stat, i) => (
              <div key={stat.label} className={`glass-dark rounded-2xl p-4 w-32 text-center animate-float${i === 1 ? "-slow" : ""} card-shimmer`} style={{ animationDelay: `${i * 0.5}s` }}>
                <div className={`text-2xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.display != null
                    ? <CountUp target={stat.display} />
                    : stat.text}
                </div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative h-16 sm:h-24">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="bg-slate-50 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {highlights.map((item, i) => (
              <div
                key={item.text}
                className="reveal flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 text-sm text-slate-600 hover:shadow-md hover:border-indigo-200 transition-all duration-300"
                data-delay={i * 60}
              >
                <item.icon className="w-4 h-4 text-indigo-500 shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES & APPROACH ────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-50 text-rose-600 rounded-full text-xs font-semibold mb-4">
              <Heart className="w-3 h-3" />
              Our Values &amp; Approach
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              What We Stand <span className="gradient-text">For</span>
            </h2>
            <p className="mt-4 text-slate-500 text-lg leading-relaxed">
              Six core principles guide everything we do — from day-to-day care decisions to long-term planning.
            </p>
          </div>

          {/* UPGRADE #3 shimmer + #5 animated-border + #7 stagger */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <div
                key={value.title}
                className={`reveal card-shimmer animated-border group relative p-7 rounded-3xl bg-white border ${value.border} card-hover overflow-hidden stagger-${i + 1}`}
                data-delay={i * 80}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-3xl`} />
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <span className="absolute top-5 right-6 text-6xl font-black text-slate-900/[0.04] select-none">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="relative text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="relative text-sm text-slate-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Approach banner — spotlight-container */}
          <div className="mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 p-8 sm:p-10 spotlight-container reveal">
            <div className="spotlight" style={{ opacity: 0 }} />
            <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-indigo-500/15 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-teal-300 text-xs font-medium mb-4">
                  <Lock className="w-3 h-3" />
                  Our Commitment
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Trauma-Informed at Every Level
                </h3>
                <p className="text-slate-300 text-base leading-relaxed max-w-xl">
                  Our entire team — from senior management to support workers — is trained in trauma-informed practice.
                  We recognise that behaviour is communication, and respond with compassion rather than consequence.
                </p>
              </div>
              <Link href="/about" className="shrink-0 group inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
                Read More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PATHWAY TO INDEPENDENCE ──────────────────────────── */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold mb-4">
              <Compass className="w-3 h-3" />
              The Journey
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              The Pathway to <span className="gradient-text">Independence</span>
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              A structured, compassionate journey from first arrival to confident, independent living.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-200 via-teal-200 to-violet-200" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {pathwaySteps.map((step, i) => (
                <div key={step.step} className={`reveal-scale relative flex flex-col items-center text-center group stagger-${i + 1}`} data-delay={i * 100}>
                  <div className={`relative z-10 w-28 h-28 rounded-full bg-gradient-to-br ${step.color} flex flex-col items-center justify-center shadow-xl ${step.glow} mb-5 group-hover:scale-110 transition-all duration-500`}>
                    <step.icon className="w-7 h-7 text-white mb-1" />
                    <span className="text-white/70 text-[10px] font-bold tracking-widest">{step.step}</span>
                  </div>
                  {i < pathwaySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-14 -right-3 z-20">
                      <ChevronRight className="w-6 h-6 text-slate-300" />
                    </div>
                  )}
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[180px]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center reveal">
            <Link href="/commissioners" className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-semibold rounded-2xl shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300">
              Commissioner Information <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4 PILLARS ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold mb-4">
              <Zap className="w-3 h-3" />
              Our Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Four Pillars of <span className="gradient-text">Excellence</span>
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              Every aspect of our service is built on these core principles, ensuring the highest standards of care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className={`reveal card-shimmer group relative p-6 bg-white rounded-3xl border border-slate-100 card-hover stagger-${i + 1}`} data-delay={i * 80}>
                <div className="absolute -top-2.5 right-5">
                  <span className={`px-2.5 py-0.5 bg-gradient-to-r ${pillar.gradient} text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-md ${pillar.glow}`}>{pillar.badge}</span>
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-5 shadow-lg ${pillar.glow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS STRIP ─────────────────────────────── */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8 reveal">Our Standards &amp; Credentials</p>
          <div className="flex flex-wrap justify-center items-center gap-4 reveal">
            {[
              { label: "Ofsted Regulated", icon: Shield },
              { label: "DBS Checked Staff", icon: CheckCircle2 },
              { label: "24/7 Staffing", icon: Zap },
              { label: "Trauma-Informed Care", icon: HeartHandshake },
              { label: "Culturally Sensitive", icon: Globe },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-700 hover:border-indigo-200 hover:shadow-md transition-all duration-200">
                <Icon className="w-4 h-4 text-teal-500 shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── spotlight-container ───────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 rounded-3xl p-10 sm:p-16 spotlight-container">
            <div className="spotlight" style={{ opacity: 0 }} />
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute top-10 right-10 animate-spin-slow opacity-10">
              <svg width="120" height="120" viewBox="0 0 120 120"><circle cx="60" cy="60" r="55" stroke="white" strokeWidth="1" fill="none" strokeDasharray="8 6" /></svg>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  <span className="text-teal-400 text-sm font-medium">For Local Authority Commissioners &amp; Social Workers</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to Make a Referral?</h2>
                <p className="mt-4 text-slate-300 text-lg max-w-xl">
                  Contact us today to discuss a placement or learn more about how Amani Pathways can support children in your care.
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
