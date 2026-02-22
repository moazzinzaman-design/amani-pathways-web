"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Wifi, Phone, ShieldCheck, MapPin } from "lucide-react";

export function WelcomeBook() {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 2; // Cover, Essentials

    const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
    const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

    return (
        <div className="w-full max-w-4xl mx-auto min-h-[70vh] flex flex-col items-center justify-center relative bg-white/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white p-4 sm:p-8">

            {/* Book Container with overflow hidden for sliding effect */}
            <div className="relative w-full h-full min-h-[600px] overflow-hidden rounded-2xl bg-white shadow-inner">
                <div
                    className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentPage * 100}%)` }}
                >

                    {/* ======================= PAGE 1: The Cover & Welcome ======================= */}
                    <div className="min-w-full h-full flex flex-col relative bg-sky-50">
                        {/* Main Image (Top Half) */}
                        <div className="relative h-1/2 w-full bg-slate-200 overflow-hidden rounded-t-2xl">
                            {/* Fallback image style. User should replace with a bright "turning key in door" photo */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-green-100 mix-blend-multiply opacity-50 z-10" />
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium z-0">
                                [Image Placeholder: Key turning in a bright modern door]
                            </div>
                            <img
                                src="/images/welcome-key.jpg"
                                alt="A new beginning"
                                className="absolute inset-0 w-full h-full object-cover z-0"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                            {/* Logo Overlay */}
                            <div className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                                <Image src="/logo-icon.svg" alt="Amani Pathways Logo" width={40} height={40} className="w-10 h-10" />
                            </div>
                        </div>

                        {/* Text Content Block (Bottom Half) */}
                        <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 relative z-20 bg-white shadow-[0_-20px_40px_rgba(0,0,0,0.05)] rounded-t-[3rem] -mt-8">
                            <h1 className="text-4xl sm:text-5xl font-black text-slate-800 mb-2 tracking-tight">
                                Welcome to Your <span className="text-blue-600">New Chapter.</span>
                            </h1>
                            <h2 className="text-xl text-slate-500 font-semibold mb-6 flex items-center gap-2">
                                Amani Pathways <span className="text-slate-300">•</span> Halifax
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                                This isn&apos;t just a room; it&apos;s a launchpad. You have arrived at a place designed to give you the space, stability, and skills to define your own future. We are glad you are here.
                            </p>

                            <div className="mt-auto border-t border-slate-100 pt-6">
                                <p className="text-sm font-medium text-slate-400 italic font-serif">
                                    &quot;Your Pathway to Sovereignty.&quot;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ======================= PAGE 2: The Essentials ======================= */}
                    <div className="min-w-full h-full flex flex-col bg-slate-50 p-6 sm:p-12 overflow-y-auto">
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">The Essentials</h2>
                        <p className="text-slate-500 mb-8">Everything you need to know for your first few hours.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

                            {/* Card 1: Wi-Fi */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <Wifi className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Get Connected</h3>
                                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 mb-3 space-y-2">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-500 font-semibold uppercase">Network</span>
                                        <span className="font-mono text-slate-800">Amani_Resident_Secure</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-500 font-semibold uppercase">Password</span>
                                        <span className="font-mono text-slate-800 tracking-wider">AmaniWelcome2026!</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 mt-auto italic">Stay in touch with friends and family.</p>
                            </div>

                            {/* Card 2: Contact Info */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Need Help?</h3>
                                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 mb-3 space-y-2">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-500 font-semibold uppercase">Support Worker</span>
                                        <span className="font-medium text-slate-800">07700 900077</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-500 font-semibold uppercase">Out of Hours Emergency</span>
                                        <span className="font-medium text-slate-800">0800 123 4567</span>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 mt-auto italic">We are here 24/7 if you need us.</p>
                            </div>

                            {/* Card 3: House Rules (Brief) */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Staying Safe</h3>
                                <ul className="text-slate-600 space-y-2 mb-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-500">•</span> Fire alarms tested weekly.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-500">•</span> Please keep the front door secure.
                                    </li>
                                </ul>
                                <p className="text-sm text-slate-500 mt-auto italic">Your safety is our top priority.</p>
                            </div>

                            {/* Card 4: Explore (Link to Map) */}
                            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden p-6 rounded-2xl shadow-md border border-indigo-400 flex flex-col group">
                                <div className="absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                    <MapPin className="w-32 h-32 text-white" />
                                </div>
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm text-white rounded-xl flex items-center justify-center mb-4 relative z-10">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 relative z-10">Explore Halifax</h3>
                                <p className="text-indigo-100 mb-4 relative z-10">
                                    Find out what&apos;s around you, from fun activities to local libraries.
                                </p>
                                <Link
                                    href="/interactive-map"
                                    className="mt-auto relative z-10 inline-flex items-center justify-center gap-2 bg-white text-indigo-600 font-semibold py-3 px-4 rounded-xl hover:bg-indigo-50 transition-colors shadow-sm"
                                >
                                    Open Interactive Map <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Book Navigation Controls */}
            <div className="w-full flex justify-between items-center mt-6 px-2">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all shadow-sm ${currentPage === 0
                        ? "text-slate-400 bg-slate-100 cursor-not-allowed opacity-50"
                        : "text-slate-700 bg-white hover:bg-slate-50 hover:shadow-md border border-slate-200"
                        }`}
                >
                    <ChevronLeft className="w-5 h-5" /> Back
                </button>

                {/* Page Indicators */}
                <div className="flex gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <div
                            key={i}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentPage ? "bg-blue-600 w-6" : "bg-slate-300"
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages - 1}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all shadow-sm ${currentPage === totalPages - 1
                        ? "text-slate-400 bg-slate-100 cursor-not-allowed opacity-50 hidden md:flex"
                        : "text-white bg-blue-600 hover:bg-blue-700 hover:shadow-md"
                        }`}
                >
                    Next <ChevronRight className="w-5 h-5" />
                </button>
            </div>

        </div>
    );
}
