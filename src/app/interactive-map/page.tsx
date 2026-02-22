import React from "react";
import { InteractiveMap } from "@/components/InteractiveMap";

export default function InteractiveMapPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Explore Halifax 🗺️
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Welcome to Halifax! Click on the pins below to discover fun things to do, cool places to hang out, and how to get around town.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500">
                        <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Find cool spots
                        </span>
                        <span className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span> Check transport
                        </span>
                        <span className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span> See fun activities
                        </span>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-8 animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
                    <InteractiveMap />
                </div>
            </div>
        </div>
    );
}
