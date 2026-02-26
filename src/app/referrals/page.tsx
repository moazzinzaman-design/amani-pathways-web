"use client";

import { useState } from "react";
import {
    Send,
    CheckCircle,
    AlertCircle,
    Loader2,
    Shield,
    Sparkles,
    ArrowRight,
    Lock,
} from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import InteractiveFAQ from "@/components/InteractiveFAQ";
import GlowingOrbs from "@/components/GlowingOrbs";
import SweepRevealText from "@/components/SweepRevealText";
import MagneticButton from "@/components/MagneticButton";
import { motion, useScroll, useTransform } from "framer-motion";

interface FormState {
    referrerName: string;
    localAuthority: string;
    referrerEmail: string;
    phoneNumber: string;
    message: string;
    turnstileToken?: string;
}

export default function ReferralsPage() {
    const [form, setForm] = useState<FormState>({
        referrerName: "",
        localAuthority: "",
        referrerEmail: "",
        phoneNumber: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );
    const [errorMsg, setErrorMsg] = useState("");

    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, 50]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/referrals", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                setStatus("error");
                setErrorMsg(data.error || "Something went wrong. Please try again.");
                return;
            }

            setStatus("success");
            setForm({
                referrerName: "",
                localAuthority: "",
                referrerEmail: "",
                phoneNumber: "",
                message: "",
            });
        } catch {
            setStatus("error");
            setErrorMsg("Network error. Please check your connection and try again.");
        }
    };

    return (
        <>
            {/* Header */}
            <section className="relative overflow-hidden noise-bg bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 py-20 sm:py-28">
                <GlowingOrbs />
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl animate-float-slow" />
                    <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-3xl animate-float" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div style={{ y: yHero }} className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-teal-300 text-xs font-medium mb-6 border border-white/10">
                            <Sparkles className="w-3.5 h-3.5" />
                            Get in Touch
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                            <SweepRevealText delay={0.1}>
                                Make a{" "}
                                <span className="gradient-text">Referral</span>
                            </SweepRevealText>
                        </h1>
                        <p className="mt-5 text-lg text-slate-300/90 leading-relaxed max-w-2xl">
                            If you are a Local Authority Commissioner or Social Worker looking
                            to place a young person, complete the form below. Our team will
                            respond within 24 hours.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form */}
            <section className="py-16 sm:py-20 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Security Notice */}
                    <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-indigo-50 to-teal-50 border border-indigo-100 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-teal-500 flex items-center justify-center shrink-0">
                            <Lock className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">
                                Secure Referral Form
                            </p>
                            <p className="text-xs text-slate-500 mt-1">
                                All information is treated as confidential, handled in accordance
                                with our data protection policies and GDPR requirements.
                            </p>
                        </div>
                    </div>

                    {status === "success" ? (
                        <div className="text-center py-16 animate-scale-in">
                            <div className="relative w-20 h-20 mx-auto mb-6">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 opacity-20 animate-pulse-glow" />
                                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-teal-400 flex items-center justify-center shadow-xl shadow-teal-500/30">
                                    <CheckCircle className="w-10 h-10 text-white" />
                                </div>
                            </div>
                            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
                                Referral Submitted!
                            </h2>
                            <p className="text-slate-500 max-w-md mx-auto text-lg">
                                Thank you. Our team will review the information and respond within
                                24 hours. For urgent matters, contact us by phone.
                            </p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-200"
                            >
                                Submit Another Referral
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {status === "error" && (
                                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 animate-fade-up">
                                    <AlertCircle className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
                                    <p className="text-sm text-rose-700">{errorMsg}</p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="group">
                                    <label
                                        htmlFor="referrerName"
                                        className="block text-sm font-semibold text-slate-700 mb-2"
                                    >
                                        Referrer Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="referrerName"
                                        name="referrerName"
                                        value={form.referrerName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-slate-700 text-sm bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 hover:border-slate-300"
                                        placeholder="Full name"
                                    />
                                </div>
                                <div className="group">
                                    <label
                                        htmlFor="localAuthority"
                                        className="block text-sm font-semibold text-slate-700 mb-2"
                                    >
                                        Local Authority *
                                    </label>
                                    <input
                                        type="text"
                                        id="localAuthority"
                                        name="localAuthority"
                                        value={form.localAuthority}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-slate-700 text-sm bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 hover:border-slate-300"
                                        placeholder="e.g. Calderdale Council"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label
                                        htmlFor="referrerEmail"
                                        className="block text-sm font-semibold text-slate-700 mb-2"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="referrerEmail"
                                        name="referrerEmail"
                                        value={form.referrerEmail}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-slate-700 text-sm bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 hover:border-slate-300"
                                        placeholder="your.email@council.gov.uk"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phoneNumber"
                                        className="block text-sm font-semibold text-slate-700 mb-2"
                                    >
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={form.phoneNumber}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-slate-700 text-sm bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 hover:border-slate-300"
                                        placeholder="07XXX XXXXXX"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-slate-700 mb-2"
                                >
                                    Secure Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 text-slate-700 text-sm bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200 resize-none hover:border-slate-300"
                                    placeholder="Please provide brief details about the young person and their needs. Do not include full names or sensitive personal data in this initial referral."
                                />
                            </div>

                            <div className="flex justify-center my-6">
                                <Turnstile
                                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                                    onSuccess={(token) => setForm({ ...form, turnstileToken: token })}
                                    onError={() => setErrorMsg("Security check failed. Please refresh and try again.")}
                                    options={{ theme: "light" }}
                                />
                            </div>

                            <MagneticButton className="w-full">
                                <button
                                    type="submit"
                                    disabled={status === "loading" || !form.turnstileToken}
                                    className="btn-micro group w-full relative flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-teal-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl shadow-neon hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin relative" />
                                            <span className="relative">Submitting...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 relative" />
                                            <span className="relative">Submit Referral</span>
                                        </>
                                    )}
                                </button>
                            </MagneticButton>

                            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                                <Shield className="w-3 h-3" />
                                <p>
                                    By submitting you agree to our data handling practices as per
                                    our privacy policy.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </section>

            {/* Interactive FAQ Section */}
            <InteractiveFAQ />
        </>
    );
}
