import React from "react";
import { InteractiveMap } from "@/components/InteractiveMap";
import { MapPin } from "lucide-react";

export default function InteractiveMapPage() {
    return (
        <div className="min-h-screen bg-slate-950 pt-28 pb-16">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        <MapPin className="w-3.5 h-3.5" />
                        Halifax, West Yorkshire
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
                        Explore Halifax 🗺️
                    </h1>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        Click on any pin below to discover fun things to do, cool places to hang out, and how to get around Halifax.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
                        <span className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>Find cool spots
                        </span>
                        <span className="flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-300 px-4 py-2 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-teal-400"></span>Check transport
                        </span>
                        <span className="flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 px-4 py-2 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-violet-400"></span>See fun activities
                        </span>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-8">
                    <InteractiveMap />
                </div>
            </div>
        </div>
    );
}

