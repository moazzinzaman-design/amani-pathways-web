"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronRight,
    ChevronLeft,
    Wifi,
    Phone,
    ShieldCheck,
    MapPin,
    BookOpen,
    Stethoscope,
    Heart,
    Users,
    ShoppingBag,
    Utensils,
    Church,
    Info,
    ExternalLink,
    GraduationCap,
    Globe
} from "lucide-react";

export function WelcomeBook() {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 8;

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
                        <div className="relative h-1/2 w-full bg-slate-200 overflow-hidden rounded-t-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-green-100 mix-blend-multiply opacity-50 z-10" />
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium z-0 px-12 text-center">
                                [Illustration: A vibrant sun rising over the Halifax hills with a path leading forward]
                            </div>
                            <img
                                src="/images/welcome-key.png"
                                alt="A new beginning"
                                className="absolute inset-0 w-full h-full object-cover z-0"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                            <div className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                                <Image src="/logo-icon.svg" alt="Amani Pathways Logo" width={40} height={40} className="w-10 h-10" />
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 relative z-20 bg-white shadow-[0_-20px_40px_rgba(0,0,0,0.05)] rounded-t-[3rem] -mt-8">
                            <h1 className="text-4xl sm:text-5xl font-black text-slate-800 mb-2 tracking-tight">
                                Welcome to Your <span className="text-blue-600">New Chapter.</span>
                            </h1>
                            <h2 className="text-xl text-slate-500 font-semibold mb-6 flex items-center gap-2">
                                Amani Pathways <span className="text-slate-300">•</span> Halifax Guide
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                                This book is your companion. It will help you find your feet, learn about your new home in Halifax, and connect with the services that support you. We&apos;re here to walk this path with you.
                            </p>

                            <div className="mt-auto border-t border-slate-100 pt-6">
                                <p className="text-sm font-medium text-slate-400 italic font-serif">
                                    &quot;Every journey begins with a single step. This is yours.&quot;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ======================= PAGE 2: The Essentials ======================= */}
                    <div className="min-w-full h-full flex flex-col bg-slate-50 p-6 sm:p-12 overflow-y-auto">
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">The Essentials</h2>
                        <p className="text-slate-500 mb-8">Quick info for your first few hours in your new home.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                                <p className="text-sm text-slate-500 mt-auto italic">Free Wi-Fi is available throughout the house.</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Important Contacts</h3>
                                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 mb-3 space-y-2">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-500 font-semibold uppercase">Your Support Worker</span>
                                        <span className="font-medium text-slate-800">07700 900077</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-500 font-semibold uppercase">Emergency (24/7)</span>
                                        <span className="font-medium text-slate-800">0800 123 4567</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl flex gap-4">
                            <Info className="w-6 h-6 text-amber-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-amber-900 mb-1 font-serif">Safety Reminder</h4>
                                <p className="text-sm text-amber-800 font-serif">
                                    Always lock the front door behind you and keep your room key safe. If you lose your key, tell your support worker immediately.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ======================= PAGE 3: Education & Learning ======================= */}
                    <div className="min-w-full h-full flex flex-col bg-sky-50 p-6 sm:p-12 overflow-y-auto">
                        <div className="flex items-center gap-4 mb-2">
                            <GraduationCap className="w-10 h-10 text-blue-600" />
                            <h2 className="text-3xl font-bold text-slate-800">Education & Future</h2>
                        </div>
                        <p className="text-slate-500 mb-8">Building your skills and learning English is the key to your success.</p>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-blue-500" /> Calderdale College
                                </h3>
                                <div className="relative h-40 w-full mb-4 rounded-xl overflow-hidden">
                                    <img src="/images/education-halifax.png" alt="Education in Halifax" className="w-full h-full object-cover" />
                                </div>
                                <p className="text-slate-600 mb-4">
                                    Most students your age go here to study ESOL (English for Speakers of Other Languages) or vocational courses like IT, Construction, or Health.
                                </p>
                                <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                                    <MapPin className="w-4 h-4" /> Francis St, Halifax HX1 3UZ
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">Halifax Central Library</h3>
                                    <p className="text-sm text-slate-600 mb-3">
                                        A great place for quiet study, free computer use, and fast Wi-Fi. It&apos;s right next to the Piece Hall.
                                    </p>
                                    <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full font-serif">Free Membership</span>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">ESOL Classes</h3>
                                    <p className="text-sm text-slate-600 mb-3">
                                        We will help you enroll in classes to improve your English speaking, reading, and writing quickly.
                                    </p>
                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-serif font-bold">Priority Enrollment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ======================= PAGE 4: Health & Org ======================= */}
                    <div className="min-w-full h-full flex flex-col bg-red-50 p-6 sm:p-12 overflow-y-auto">
                        <div className="flex items-center gap-4 mb-2">
                            <Heart className="w-10 h-10 text-red-500" />
                            <h2 className="text-3xl font-bold text-slate-800">Health & Wellbeing</h2>
                        </div>
                        <p className="text-slate-500 mb-8">Taking care of your body and mind is very important.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                        <Stethoscope className="w-6 h-6 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg">GP (Doctor)</h3>
                                        <p className="text-sm text-slate-600">
                                            We will help you register with a local doctor. If you feel unwell, you visit your GP first.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                        <Utensils className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg">Dentist</h3>
                                        <p className="text-sm text-slate-600">
                                            Registration for dental check-ups to keep your teeth healthy.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-red-100">
                                <h3 className="font-bold text-slate-800 mb-3">Feeling Stressed?</h3>
                                <p className="text-sm text-slate-600 mb-4 font-serif">
                                    Moving to a new country is hard. If you are feeling sad, lonely, or can&apos;t sleep, please tell your support worker. You don&apos;t have to face it alone.
                                </p>
                                <div className="p-3 bg-red-50 rounded-xl text-xs text-red-800 font-medium font-serif italic">
                                    NHS 111 is available for non-emergency health advice 24 hours a day.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ======================= PAGE 5: Community & Support ======================= */}
                    <div className="min-w-full h-full flex flex-col bg-purple-50 p-6 sm:p-12 overflow-y-auto">
                        <div className="flex items-center gap-4 mb-2">
                            <Users className="w-10 h-10 text-purple-600" />
                            <h2 className="text-3xl font-bold text-slate-800">Community & Support</h2>
                        </div>
                        <p className="text-slate-500 mb-8">Local people who are here to help you feel welcome.</p>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Globe className="w-48 h-48 text-purple-600" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">St Augustine&apos;s Centre</h3>
                                <p className="text-slate-600 mb-6 max-w-lg leading-relaxed">
                                    A specialist center for asylum seekers and refugees in Halifax. They offer hot lunch, legal advice, English practice, and social activities.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-slate-500 font-serif">
                                        <ChevronRight className="w-4 h-4 text-purple-400" /> Warm Welcome
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 font-serif">
                                        <ChevronRight className="w-4 h-4 text-purple-400" /> Hot Food
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 font-serif">
                                        <ChevronRight className="w-4 h-4 text-purple-400" /> Legal Support
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 font-serif">
                                        <ChevronRight className="w-4 h-4 text-purple-400" /> Career Advice
                                    </div>
                                </div>
                                <div className="text-sm font-bold text-purple-600 flex items-center gap-2">
                                    <MapPin className="w-4 h-4" /> Hanson Lane, Halifax HX1 5PG
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ======================= PAGE 6: Life in Halifax ======================= */}
                    <div className="min-w-full h-full flex flex-col bg-emerald-50 p-6 sm:p-12 overflow-y-auto">
                        <div className="flex items-center gap-4 mb-2">
                            <ShoppingBag className="w-10 h-10 text-emerald-600" />
                            <h2 className="text-3xl font-bold text-slate-800">Life in Halifax</h2>
                        </div>
                        <p className="text-slate-500 mb-8">Finding food you love and shopping on a budget.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                                <h3 className="text-lg font-bold text-slate-800 mb-3 font-serif">Halifax Borough Market</h3>
                                <div className="relative h-32 w-full mb-3 rounded-lg overflow-hidden">
                                    <img src="/images/halifax-market.png" alt="Halifax Borough Market" className="w-full h-full object-cover" />
                                </div>
                                <p className="text-sm text-slate-600 mb-4">
                                    A beautiful Victorian market where you can find fresh fruit, vegetables, and affordable food from all over the world.
                                </p>
                                <div className="p-3 bg-emerald-50 rounded-xl text-xs text-emerald-700 font-bold font-serif italic text-center">
                                    Cheaper than most supermarkets!
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 flex flex-col">
                                <h3 className="text-lg font-bold text-slate-800 mb-3 font-serif">Affordable Shopping</h3>
                                <ul className="text-sm text-slate-600 space-y-3 mb-4">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        <strong>Aldi / Lidl:</strong> Best for weekly groceries.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        <strong>Poundland:</strong> For household essentials.
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        <strong>Charity Shops:</strong> Great for cheap clothes.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                            <h3 className="text-lg font-bold text-slate-800 mb-2 font-serif">Halal & International Food</h3>
                            <p className="text-sm text-slate-600 font-serif leading-relaxed">
                                Halifax has many shops on Queen&apos;s Road and the Town Centre offering Halal meat and ingredients from Asia, Africa, and the Middle East.
                            </p>
                        </div>
                    </div>

                    {/* ======================= PAGE 7: Fun & Faith ======================= */}
                    <div className="min-w-full h-full flex flex-col bg-orange-50 p-6 sm:p-12 overflow-y-auto">
                        <div className="flex items-center gap-4 mb-2">
                            <Church className="w-10 h-10 text-orange-500" />
                            <h2 className="text-3xl font-bold text-slate-800">Fun & Faith</h2>
                        </div>
                        <p className="text-slate-500 mb-8">Staying active and connecting with your community.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                                <h3 className="text-lg font-bold text-slate-800 mb-3 font-serif">North Bridge Leisure Centre</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    The main place for football, gym, and swimming. Exercise is great for mental health!
                                </p>
                                <div className="text-xs text-orange-600 font-bold bg-orange-50 p-2 rounded-lg text-center uppercase tracking-wide">
                                    Ask us about discounted memberships
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 font-serif">
                                <h3 className="text-lg font-bold text-slate-800 mb-3">Places of Worship</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Halifax has many Mosques and Churches. We can help you find a place where you feel comfortable practicing your faith.
                                </p>
                                <div className="flex gap-2">
                                    <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-500">Multicultural</span>
                                    <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-500">Welcoming</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-orange-400 to-amber-500 p-8 rounded-3xl text-white shadow-lg overflow-hidden relative">
                            <div className="absolute top-0 right-0 h-full w-1/3 opacity-40">
                                <img src="/images/halifax-park.png" alt="People's Park" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">People&apos;s Park</h3>
                            <p className="text-orange-50 relative z-10 leading-relaxed max-w-[70%]">
                                A beautiful, free park very close to the town center. Perfect for a walk, meeting friends, or just breathing fresh air on a sunny day.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ======================= PAGE 8: Next Steps ======================= */}
                <div className="min-w-full h-full flex flex-col bg-slate-900 p-6 sm:p-12 text-white overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]" />
                        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-purple-500 rounded-full filter blur-[120px]" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center max-w-2xl mx-auto">
                        <div className="w-20 h-20 bg-blue-500 rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                            <MapPin className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-black mb-6">Ready to Explore?</h2>
                        <p className="text-xl text-slate-300 mb-12 leading-relaxed font-serif italic">
                            You now know the basics. Now it&apos;s time to see where everything is located on our interactive map.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                            <Link
                                href="/interactive-map"
                                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95"
                            >
                                <MapPin className="w-5 h-5" /> Open Map
                            </Link>
                            <button
                                onClick={() => setCurrentPage(0)}
                                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-2xl transition-all backdrop-blur-md"
                            >
                                <ChevronLeft className="w-5 h-5" /> Start Over
                            </button>
                        </div>

                        <div className="mt-16 pt-8 border-t border-white/10 w-full">
                            <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">
                                Amani Pathways • Sovereign Citizenship
                            </p>
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
                <div className="hidden sm:flex gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${i === currentPage ? "bg-blue-600 w-8" : "bg-slate-300 w-2.5"
                                }`}
                            aria-label={`Go to page ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Mobile Page Indicator */}
                <div className="sm:hidden text-slate-500 font-bold text-sm">
                    {currentPage + 1} / {totalPages}
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
