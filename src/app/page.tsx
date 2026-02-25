"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Shield, CheckCircle2,
  Sparkles, Star, Zap,
  ArrowRight, ChevronRight, Heart,
  Lock, Compass, HeartHandshake, Globe,
  Users, Home, Handshake, Scale, Lightbulb, Eye
} from "lucide-react";
import CountUp from "@/components/CountUp";
import Typewriter from "@/components/Typewriter";
import ParticleHeroBackground from "@/components/ParticleHeroBackground";
import SweepRevealText from "@/components/SweepRevealText";
import Tilt from "react-parallax-tilt";
import { pillars, highlights, coreValues, pathwaySteps, heroWords } from "@/data/homeData";

import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Page ──────────────────────────────────────────────────── */

export default function HomePage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 180]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -120]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 90]);

  return (
    <>
      {/* ── HERO ── with spotlight + parallax orbs ──────────── */}
      <section
        className="relative overflow-hidden noise-bg bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 -mt-16 lg:-mt-18 pt-16 lg:pt-18 spotlight-container"
      >
        <div className="spotlight" style={{ opacity: 0 }} />

        {/* Futuristic Interactive Particles */}
        <ParticleHeroBackground />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl animate-float" />
          <motion.div style={{ y: y2 }} className="absolute top-40 right-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl animate-float-slow" />
          <motion.div style={{ y: y3 }} className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-teal-300 text-xs font-medium mb-8 border border-white/10 animate-fade-up">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Ofsted Regulated • Halifax, West Yorkshire
            </div>

            <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight relative z-20">
              <SweepRevealText delay={0.1}>
                Empowering Young People
              </SweepRevealText>
              <SweepRevealText delay={0.3}>
                to Build <span className="gradient-text">
                  <Typewriter words={heroWords} typeSpeed={55} deleteSpeed={30} pauseAfter={2400} />
                </span>
              </SweepRevealText>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 text-lg sm:text-xl text-slate-300/90 leading-relaxed max-w-2xl relative z-20"
            >
              Amani Pathways provides trauma-informed, high-quality supported
              accommodation for Unaccompanied Asylum-Seeking Children aged 16–17,
              helping them navigate their journey towards independence, safety,
              and belonging.
            </motion.p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up z-20 relative" style={{ animationDelay: "0.24s" }}>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.45} glareColor="#5eead4" glarePosition="all" glareBorderRadius="16px" transitionSpeed={2000}>
                <Link
                  href="/referrals"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(45,212,191,0.5)] overflow-hidden border border-white/10 w-full sm:w-auto"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="relative z-10">Make a Referral</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Tilt>
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} transitionSpeed={2000}>
                <Link
                  href="/about"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-slate-100 font-semibold rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/30 backdrop-blur-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                  Learn About Us
                </Link>
              </Tilt>
            </div>
          </div>

          <div className="hidden lg:flex absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 flex-col gap-4">
            {[
              { label: "Staffing", display: null, text: "24/7", color: "from-teal-500 to-teal-400" },
              { label: "Bedrooms", display: 5, text: null, color: "from-indigo-500 to-indigo-400" },
              { label: "Ofsted", display: null, text: "✓", color: "from-amber-500 to-amber-400" },
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
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <item.icon className="w-4 h-4 text-indigo-500 shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES & APPROACH (Infinite Marquee) ───────────────────── */}
      <section className="py-24 sm:py-32 bg-slate-950 overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mx-auto mb-16 reveal relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-full text-xs font-bold tracking-wider uppercase mb-6">
            <Heart className="w-3.5 h-3.5" />
            Our Values & Approach
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            What We Stand <span className="gradient-text">For</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Six core principles guide everything we do — from day-to-day care decisions to long-term planning.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden flex z-10 py-10">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none fade-edges" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none fade-edges" />

          <div className="flex w-max animate-marquee gap-6 items-stretch px-6">
            {[...coreValues, ...coreValues].map((value, i) => (
              <div
                key={`${value.title}-${i}`}
                className="w-[320px] sm:w-[400px] shrink-0 relative p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all duration-300 shadow-2xl flex flex-col justify-start"
              >
                <div className={`absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br ${value.gradient} opacity-10 blur-2xl rounded-full`} />
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-xl shadow-slate-950/50`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{value.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed font-medium">{value.description}</p>

                <span className="absolute bottom-6 right-8 text-8xl font-black text-white/[0.02] select-none pointer-events-none">
                  {((i % coreValues.length) + 1).toString().padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-indigo-950/80 via-indigo-900/60 to-slate-900/80 p-10 sm:p-14 spotlight-container reveal backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10">
          <div className="spotlight" style={{ opacity: 0 }} />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[80px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-xs font-bold tracking-widest uppercase mb-6">
                <Lock className="w-3.5 h-3.5" />
                Our Commitment
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 tracking-tight">
                Trauma-Informed at Every Level
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl font-medium">
                Our entire team — from senior management to support workers — is extensively trained in trauma-informed practice.
                We recognise that behaviour is communication, and respond with deep compassion and structural safety rather than consequence.
              </p>
            </div>
            <Link href="/about" className="shrink-0 group inline-flex items-center gap-3 px-8 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-300 shadow-xl hover:-translate-y-1">
              Read Our Ethos <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </section>

      {/* ── PATHWAY TO INDEPENDENCE (Sticky Scroll) ──────────────────────────── */}
      <section className="py-24 sm:py-32 bg-slate-900 relative">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left Column: Sticky Headings */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 reveal flex-shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Compass className="w-3.5 h-3.5" />
              The Journey
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              The Pathway to <br /><span className="gradient-text">Independence</span>
            </h2>
            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              A structured, compassionate journey from first arrival to confident, independent living. Every step is guided by dedicated support workers.
            </p>
            <div className="mt-10">
              <Link href="/commissioners" className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-2xl shadow-lg hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm">
                Commissioner Info <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Scrolling Steps */}
          <div className="lg:w-2/3 flex flex-col gap-8 w-full">
            {pathwaySteps.map((step, i) => (
              <div key={step.step} className={`reveal-left relative flex flex-col sm:flex-row items-start gap-6 p-8 rounded-3xl bg-slate-950/50 border border-white/5 hover:border-white/10 hover:bg-slate-950/80 transition-all duration-500 card-hover shadow-xl overflow-hidden group stagger-${(i % 3) + 1}`}>
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${step.color} blur-[100px] opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`} />
                <div className={`shrink-0 relative z-10 w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} flex flex-col items-center justify-center shadow-lg ${step.glow} group-hover:scale-110 transition-transform duration-500`}>
                  <step.icon className="w-8 h-8 text-white mb-1" />
                </div>
                <div className="flex-1">
                  <span className={`inline-block px-2.5 py-1 rounded-md bg-gradient-to-r ${step.color} text-white font-bold text-[10px] tracking-widest uppercase mb-3 opacity-90`}>
                    {step.step}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-base text-slate-400 leading-relaxed font-medium">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 PILLARS (Bento Grid) ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mx-auto mb-16 reveal relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3.5 h-3.5" />
            Our Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Four Pillars of <span className="gradient-text">Excellence</span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg leading-relaxed">
            Every aspect of our service is built on these core principles, ensuring the highest standards of care.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 auto-rows-[300px] relative z-10">
          {pillars.map((pillar, i) => {
            const bentoClasses = [
              "md:col-span-6 lg:col-span-8 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950",
              "md:col-span-6 lg:col-span-4 bg-gradient-to-bl from-slate-900 via-teal-950/20 to-slate-950",
              "md:col-span-6 lg:col-span-5 bg-gradient-to-tr from-slate-950 via-indigo-950/30 to-slate-900",
              "md:col-span-6 lg:col-span-7 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950"
            ][i % 4];

            return (
              <div key={pillar.title} className={`reveal card-shimmer group relative p-8 rounded-[2rem] border border-white/5 card-hover shadow-2xl overflow-hidden flex flex-col justify-end stagger-${i + 1} ${bentoClasses}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={`absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-br ${pillar.gradient} blur-[120px] opacity-[0.08] group-hover:opacity-20 transition-opacity duration-700 pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3`} />

                <div className="absolute top-6 right-6">
                  <span className={`px-4 py-1.5 bg-gradient-to-r ${pillar.gradient} text-white shadow-lg ${pillar.glow} text-[10px] font-black rounded-full uppercase tracking-[0.15em]`}>
                    {pillar.badge}
                  </span>
                </div>

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-auto shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 backdrop-blur-md`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-8 mb-3 tracking-tight drop-shadow-sm">{pillar.title}</h3>
                <p className="text-base text-slate-300 leading-relaxed font-medium line-clamp-3">{pillar.description}</p>
              </div>
            );
          })}
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
                  <span className="text-teal-400 text-sm font-medium">For Local Authority Commissioners & Social Workers</span>
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
