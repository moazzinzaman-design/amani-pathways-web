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
import ShootingStars from "@/components/ShootingStars";
import GlowingOrbs from "@/components/GlowingOrbs";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import { pillars, highlights, coreValues, pathwaySteps, heroWords } from "@/data/homeData";

import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Page ──────────────────────────────────────── */

export default function HomePage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1200], [0, 100]);
  const y2 = useTransform(scrollY, [0, 1200], [0, -80]);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#0d1030] to-[#0a0a1a] -mt-16 lg:-mt-18 pt-16 lg:pt-18">
        <ParticleHeroBackground />
        <ShootingStars />
        <GlowingOrbs />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#6366f1]/15 rounded-full text-[#a5b4fc] text-xs font-semibold mb-8 border border-[#6366f1]/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#818cf8]" />
              Ofsted Regulated • Halifax, West Yorkshire
            </motion.div>

            <motion.div style={{ y: useTransform(scrollY, [0, 600], [0, 40]) }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
              <SweepRevealText delay={0.1}>
                Empowering Young People
              </SweepRevealText>
              <SweepRevealText delay={0.3}>
                to Build <span className="gradient-text">
                  <Typewriter words={heroWords} typeSpeed={55} deleteSpeed={30} pauseAfter={2400} />
                </span>
              </SweepRevealText>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl"
            >
              Amani Pathways provides trauma-informed, high-quality supported
              accommodation for Unaccompanied Asylum-Seeking Children aged 16–17,
              helping them navigate their journey towards independence, safety,
              and belonging.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton>
                <Link
                  href="/referrals"
                  className="btn-micro group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#14b8a6] text-white font-semibold rounded-2xl transition-all duration-300 shadow-[0_0_32px_rgba(99,102,241,0.4)] shadow-neon hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Make a Referral
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <Link
                href="/about"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/25 backdrop-blur-sm"
              >
                Learn About Us
              </Link>
            </motion.div>
          </div>

          {/* Floating stat badges */}
          <div className="hidden lg:flex absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 flex-col gap-5">
            {[
              { label: "Staffing", display: null, text: "24/7", accent: "text-[#2dd4bf]", glow: "shadow-[0_0_20px_rgba(45,212,191,0.15)]", border: "border-[#2dd4bf]/20" },
              { label: "Bedrooms", display: 5, text: null, accent: "text-[#818cf8]", glow: "shadow-[0_0_20px_rgba(129,140,248,0.15)]", border: "border-[#818cf8]/20" },
              { label: "Ofsted", display: null, text: "✓", accent: "text-[#fbbf24]", glow: "shadow-[0_0_20px_rgba(251,191,36,0.15)]", border: "border-[#fbbf24]/20" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.15, duration: 0.5 }}
                className={`bg-white/[0.04] backdrop-blur-xl ${stat.border} border rounded-2xl p-5 w-32 text-center ${stat.glow}`}
              >
                <div className={`text-2xl font-extrabold ${stat.accent}`}>
                  {stat.display != null ? <CountUp target={stat.display} /> : stat.text}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gradient fade to next section */}
        <div className="h-24 bg-gradient-to-b from-transparent to-[#080818]" />
      </section>

      {/* ── Highlights Strip ─────────────────────────────── */}
      <section className="bg-[#080818] py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
            {highlights.map((item, i) => (
              <div
                key={item.text}
                className="reveal flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] rounded-full text-sm text-slate-300 font-medium border border-white/[0.06] hover:border-[#6366f1]/30 hover:bg-[#6366f1]/10 hover:text-white transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <item.icon className="w-4 h-4 text-[#818cf8] shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES & APPROACH ────────────────────────────── */}
      <section className="py-28 sm:py-36 bg-[#080818] overflow-hidden relative">
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#f43f5e]/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#6366f1]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 reveal relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f43f5e]/10 border border-[#f43f5e]/20 text-[#fb7185] rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
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

        {/* Marquee */}
        <div className="relative w-full overflow-hidden flex z-10 py-6">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080818] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080818] to-transparent z-20 pointer-events-none" />

          <div className="flex w-max animate-marquee gap-6 items-stretch px-6">
            {[...coreValues, ...coreValues].map((value, i) => (
              <div
                key={`${value.title}-${i}`}
                className="w-[320px] sm:w-[380px] shrink-0 relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-start group backdrop-blur-sm"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{value.title}</h3>
                <p className="text-[15px] text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 relative z-10 glow-border rounded-3xl">
          <div className="reveal rounded-3xl bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#14b8a6]/10 border border-white/[0.06] p-10 sm:p-14 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#14b8a6]/10 border border-[#14b8a6]/20 rounded-full text-[#2dd4bf] text-xs font-semibold tracking-widest uppercase mb-6">
                  <Lock className="w-3.5 h-3.5" />
                  Our Commitment
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 tracking-tight">
                  Trauma-Informed at Every Level
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                  Our entire team — from senior management to support workers — is extensively trained in trauma-informed practice.
                  We recognise that behaviour is communication, and respond with deep compassion and structural safety rather than consequence.
                </p>
              </div>
              <MagneticButton>
                <Link href="/about" className="btn-micro shrink-0 group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#14b8a6] text-white font-semibold rounded-2xl transition-all duration-300 shadow-[0_0_24px_rgba(99,102,241,0.3)] shadow-neon hover:-translate-y-0.5">
                  Read Our Ethos <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── PATHWAY TO INDEPENDENCE ──────────────────────── */}
      <section className="py-28 sm:py-36 bg-gradient-to-b from-[#080818] via-[#0c0c24] to-[#080818] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Sticky headings */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 reveal flex-shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#a5b4fc] rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Compass className="w-3.5 h-3.5" />
              The Journey
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              The Pathway to <br /><span className="text-[#2dd4bf]">Independence</span>
            </h2>
            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              A structured, compassionate journey from first arrival to confident, independent living. Every step is guided by dedicated support workers.
            </p>
            <div className="mt-10">
              <Link href="/commissioners" className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 hover:border-white/20 shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Commissioner Info <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Scrolling Steps */}
          <div className="lg:w-2/3 flex flex-col gap-6 w-full">
            {pathwaySteps.map((step, i) => (
              <div key={step.step} className={`reveal-left relative flex flex-col sm:flex-row items-start gap-6 p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.06] transition-all duration-500 group stagger-${(i % 3) + 1}`}>
                <div className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ${step.glow} group-hover:scale-105 transition-transform duration-300`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <span className={`inline-block px-2.5 py-1 rounded-md bg-gradient-to-r ${step.color} text-white font-bold text-[10px] tracking-widest uppercase mb-3 opacity-80`}>
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-[15px] text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 PILLARS (Bento Grid) ──────────────────────── */}
      <section className="py-24 sm:py-36 bg-[#080818] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#6366f1]/8 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 reveal relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#a5b4fc] rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            <Zap className="w-3.5 h-3.5" />
            Our Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Four Pillars of <span className="text-[#818cf8]">Excellence</span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg leading-relaxed">
            Every aspect of our service is built on these core principles, ensuring the highest standards of care.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 auto-rows-[280px] relative z-10">
          {pillars.map((pillar, i) => {
            const bentoClasses = [
              "md:col-span-6 lg:col-span-8",
              "md:col-span-6 lg:col-span-4",
              "md:col-span-6 lg:col-span-5",
              "md:col-span-6 lg:col-span-7"
            ][i % 4];

            return (
              <TiltCard key={pillar.title} className={`reveal group relative p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-all duration-500 overflow-hidden flex flex-col justify-end stagger-${i + 1} ${bentoClasses}`} style={{ transitionDelay: `${i * 80}ms` }}>

                {/* Vibrant hover glow */}
                <div className={`absolute top-0 right-0 w-[200%] h-[200%] bg-gradient-to-br ${pillar.gradient} blur-[120px] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3`} />

                <div className="absolute top-6 right-6 z-10">
                  <span className={`px-3 py-1.5 bg-gradient-to-r ${pillar.gradient} text-white text-[10px] font-bold rounded-full uppercase tracking-[0.12em] shadow-sm`}>
                    {pillar.badge}
                  </span>
                </div>

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-auto shadow-lg z-10 ${pillar.glow} group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-6 mb-2 tracking-tight z-10">{pillar.title}</h3>
                <p className="text-[15px] text-slate-400 leading-relaxed line-clamp-3 z-10">{pillar.description}</p>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[#080818] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#6366f1]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="reveal text-center">
            <div className="flex items-center justify-center gap-2 mb-5">
              <CheckCircle2 className="w-5 h-5 text-[#2dd4bf]" />
              <span className="text-[#2dd4bf] text-sm font-semibold">For Local Authority Commissioners & Social Workers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ready to Make a Referral?
            </h2>
            <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Contact us today to discuss a placement or learn more about how Amani Pathways can support children in your care.
            </p>
            <div className="mt-10">
              <MagneticButton>
                <Link
                  href="/referrals"
                  className="btn-micro group inline-flex items-center gap-2.5 px-10 py-5 bg-gradient-to-r from-[#14b8a6] to-[#6366f1] text-white font-bold rounded-2xl text-lg transition-all duration-300 shadow-[0_0_40px_rgba(20,184,166,0.3)] shadow-neon hover:-translate-y-0.5"
                >
                  Start a Referral
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
