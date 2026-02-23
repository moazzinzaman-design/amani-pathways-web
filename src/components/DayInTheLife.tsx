"use client";

import { Clock, Coffee, BookOpen, Utensils, Users, Moon } from "lucide-react";

const schedule = [
    {
        time: "08:00 AM",
        title: "Morning Routine",
        description: "Wake up, personal hygiene, and a healthy breakfast in the communal kitchen.",
        icon: Coffee,
        color: "text-amber-500",
        bg: "bg-amber-100",
        border: "border-amber-200"
    },
    {
        time: "09:30 AM",
        title: "Education & ESOL",
        description: "Attend college or dedicated English language classes to build essential communication skills.",
        icon: BookOpen,
        color: "text-blue-500",
        bg: "bg-blue-100",
        border: "border-blue-200"
    },
    {
        time: "01:00 PM",
        title: "Lunch & Social",
        description: "Lunch break, either at college or returning home to prepare a meal and socialize.",
        icon: Utensils,
        color: "text-emerald-500",
        bg: "bg-emerald-100",
        border: "border-emerald-200"
    },
    {
        time: "03:00 PM",
        title: "Key Worker Session",
        description: "1:1 session with a dedicated key worker to discuss goals, mental health, or asylum claim progress.",
        icon: Users,
        color: "text-indigo-500",
        bg: "bg-indigo-100",
        border: "border-indigo-200"
    },
    {
        time: "06:00 PM",
        title: "Communal Dinner",
        description: "Cooking and eating together, sharing cultural dishes, and building a sense of family and belonging.",
        icon: Utensils,
        color: "text-rose-500",
        bg: "bg-rose-100",
        border: "border-rose-200"
    },
    {
        time: "10:30 PM",
        title: "Quiet Time",
        description: "House quiet hours begin, encouraging healthy sleep patterns and respect for other residents.",
        icon: Moon,
        color: "text-slate-600",
        bg: "bg-slate-200",
        border: "border-slate-300"
    }
];

export default function DayInTheLife() {
    return (
        <div className="relative max-w-2xl mx-auto py-10">
            {/* Center Line for desktop */}
            <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-100 via-teal-100 to-indigo-100 -translate-x-1/2" />

            {/* Left Line for mobile */}
            <div className="sm:hidden absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-100 via-teal-100 to-indigo-100" />

            <div className="space-y-12 position-relative">
                {schedule.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={item.title} className="relative flex items-center justify-between sm:w-full group">

                            {/* Mobile Icon (Left Aligned) */}
                            <div className={`sm:hidden absolute left-8 -translate-x-1/2 w-12 h-12 rounded-full ${item.bg} border-4 border-white flex items-center justify-center z-10 shadow-sm transition-transform group-hover:scale-110`}>
                                <item.icon className={`w-5 h-5 ${item.color}`} />
                            </div>

                            {/* Desktop Icon (Center Aligned) */}
                            <div className={`hidden sm:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full ${item.bg} border-4 border-white items-center justify-center z-10 shadow-sm transition-transform group-hover:scale-110 duration-300`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>

                            {/* Content Card */}
                            <div className={`w-full sm:w-5/12 ml-20 sm:ml-0 ${isEven ? 'sm:text-right sm:pr-12' : 'sm:ml-auto sm:pl-12'}`}>
                                <div className={`p-6 bg-white rounded-2xl border ${item.border} shadow-sm group-hover:shadow-md transition-shadow relative`}>
                                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 text-xs font-bold mb-3 border border-slate-100 ${isEven ? 'sm:float-right sm:ml-4 sm:mb-2' : ''}`}>
                                        <Clock className="w-3.5 h-3.5" />
                                        {item.time}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 clear-both">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
