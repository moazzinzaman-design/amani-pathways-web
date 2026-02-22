"use client";

import React, { useState } from "react";
import Image from "next/image";
import { mapLocations, MapLocation } from "../data/mapLocations";
import { MapPin, X, Navigation, Bus, Car } from "lucide-react";

export function InteractiveMap() {
    const [activeLocation, setActiveLocation] = useState<MapLocation | null>(null);

    // We are assuming the map image will be in public/images/halifax-map.jpg
    // For now, using a placeholder until the user adds the real map
    const mapImageSrc = "/images/halifax-map.jpg";

    return (
        <div className="relative w-full max-w-6xl mx-auto h-[70vh] min-h-[500px] bg-sky-50 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            {/* Map Image Container */}
            <div className="absolute inset-0 w-full h-full">
                <div className="relative w-full h-full flex items-center justify-center bg-gray-200">
                    <div className="absolute text-gray-400 font-medium">Map image loading...</div>
                    <img
                        src={mapImageSrc}
                        alt="Halifax Map"
                        className="w-full h-full object-contain relative z-10"
                    />

                    {/* Hotspots */}
                    <div className="absolute inset-0 z-20">
                        {mapLocations.map((loc) => (
                            <button
                                key={loc.id}
                                onClick={() => setActiveLocation(loc)}
                                className={`absolute group transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 hover:z-50 ${activeLocation?.id === loc.id ? "scale-125 z-50 drop-shadow-2xl" : "scale-100 z-30"
                                    }`}
                                style={{ top: `${loc.y}%`, left: `${loc.x}%` }}
                            >
                                <div className="relative flex items-center justify-center">
                                    <MapPin
                                        className={`w-12 h-12 transition-colors duration-300 ${activeLocation?.id === loc.id ? "text-red-600 fill-white drop-shadow-lg" : "text-blue-600 fill-white drop-shadow-md"
                                            } group-hover:text-red-500`}
                                        strokeWidth={2}
                                    />
                                    <div className="absolute -mt-2 text-xl">
                                        {loc.emoji}
                                    </div>
                                </div>

                                {/* Tooltip for hover state */}
                                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white text-gray-900 px-3 py-1 rounded-full shadow-lg font-bold text-sm -top-8 left-1/2 -translate-x-1/2 pointer-events-none z-50">
                                    {loc.name}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Details Side Panel/Modal */}
            {activeLocation && (
                <div className="absolute inset-0 bg-black/20 z-40 flex items-end sm:items-center justify-end p-0 sm:p-6 transition-all">
                    {/* Backdrop click to close */}
                    <div className="absolute inset-0" onClick={() => setActiveLocation(null)} />

                    <div className="relative w-full sm:w-96 bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 sm:slide-in-from-right-8 fade-in h-auto max-h-[85vh] flex flex-col z-50">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex justify-between items-start text-white">
                            <div>
                                <h3 className="text-2xl font-black mb-1 flex items-center gap-2">
                                    {activeLocation.name} <span>{activeLocation.emoji}</span>
                                </h3>
                            </div>
                            <button
                                onClick={() => setActiveLocation(null)}
                                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 overflow-y-auto w-full">
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                {activeLocation.description}
                            </p>

                            {/* Fun Things To Do */}
                            <div className="mb-6 bg-yellow-50 rounded-2xl p-5 border border-yellow-100">
                                <h4 className="font-bold text-yellow-800 text-lg mb-3 flex items-center gap-2">
                                    ✨ Fun Things To Do
                                </h4>
                                <ul className="space-y-3">
                                    {activeLocation.funThings.map((thing, idx) => (
                                        <li key={idx} className="flex items-start text-gray-800 gap-2 font-medium">
                                            <span className="text-yellow-500 mt-1">•</span>
                                            <span>{thing}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Transport */}
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                                    🗺️ How to get there
                                </h4>
                                <div className="grid grid-cols-1 gap-3">
                                    {activeLocation.transport.walking && (
                                        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                                            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                                                <Navigation className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Walking</div>
                                                <div className="font-medium text-gray-900">{activeLocation.transport.walking}</div>
                                            </div>
                                        </div>
                                    )}
                                    {activeLocation.transport.public && (
                                        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                                            <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                                <Bus className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Public Transport</div>
                                                <div className="font-medium text-gray-900">{activeLocation.transport.public}</div>
                                            </div>
                                        </div>
                                    )}
                                    {activeLocation.transport.car && (
                                        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                                            <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                                                <Car className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">By Car</div>
                                                <div className="font-medium text-gray-900">{activeLocation.transport.car}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
