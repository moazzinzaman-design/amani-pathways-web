"use client";

import React, { useState, useEffect, useRef } from "react";
import { mapLocations, MapLocation } from "../data/mapLocations";
import { Navigation, Bus, Car, X, MapPin } from "lucide-react";

const HALIFAX_CENTER: [number, number] = [53.717872, -1.851759];

export function InteractiveMap() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapInstanceRef = useRef<any>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const markersRef = useRef<any[]>([]);

    // Set Amani Pathways as the default active location on load
    const [activeLocation, setActiveLocation] = useState<MapLocation | null>(() => {
        return mapLocations.find(loc => loc.id === "amani-pathways-home") || null;
    });

    // ── Initialise Leaflet on mount (client-only) ──────────────────────────
    useEffect(() => {
        if (typeof window === "undefined" || mapInstanceRef.current) return;

        let destroyed = false;

        async function init() {
            // Dynamically import leaflet npm package — SSR safe
            const L = (await import("leaflet")).default;
            if (destroyed || !mapContainerRef.current) return;

            // Fix missing default marker icon (Next.js asset pipeline issue)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete (L.Icon.Default.prototype as any)._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
                iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
            });

            // Create map
            const map = L.map(mapContainerRef.current, {
                center: HALIFAX_CENTER,
                zoom: 14,
                zoomControl: true,
            });

            // Esri World Imagery satellite — free, no API key
            L.tileLayer(
                "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                {
                    attribution: "Tiles &copy; Esri",
                    maxZoom: 19,
                }
            ).addTo(map);

            // Labels overlay on top of satellite imagery
            L.tileLayer(
                "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
                { maxZoom: 19, opacity: 0.6 }
            ).addTo(map);

            // Inject custom pin styles
            if (!document.getElementById("emoji-pin-styles")) {
                const s = document.createElement("style");
                s.id = "emoji-pin-styles";
                s.textContent = `
                  .ep { position:relative; display:flex; flex-direction:column; align-items:center; }
                  .ep__b {
                    width:36px; height:36px;
                    background:rgba(15,23,42,.88); backdrop-filter:blur(8px);
                    border-radius:50% 50% 50% 0; transform:rotate(-45deg);
                    border:2px solid rgba(99,102,241,.7);
                    box-shadow:0 0 18px rgba(99,102,241,.4), 0 4px 12px rgba(0,0,0,.5);
                    display:flex; align-items:center; justify-content:center;
                    transition:all .25s;
                  }
                  .ep__b span { transform:rotate(45deg); font-size:14px; line-height:1; }
                  .ep--active .ep__b {
                    background:rgba(99,102,241,.95); border-color:#a78bfa;
                    box-shadow:0 0 28px rgba(99,102,241,.8), 0 6px 20px rgba(0,0,0,.6);
                    transform:rotate(-45deg) scale(1.2);
                  }
                  .ep__stem { width:2px; height:5px; background:linear-gradient(to bottom,rgba(99,102,241,.7),transparent); }
                  .ep__pulse { position:absolute; bottom:-3px; width:14px; height:14px; border-radius:50%; background:rgba(99,102,241,.3); animation:ep-p 2s ease-in-out infinite; }
                  .ep--active .ep__pulse { background:rgba(167,139,250,.5); animation:ep-p 1s ease-in-out infinite; }
                  @keyframes ep-p { 0%,100%{transform:scale(.7);opacity:.5} 50%{transform:scale(1.8);opacity:0} }
                  /* Override Leaflet controls for dark look */
                  .leaflet-control-attribution { background:rgba(0,0,0,.55)!important; color:#94a3b8!important; font-size:10px!important; }
                  .leaflet-control-attribution a { color:#818cf8!important; }
                  .leaflet-control-zoom { border:1px solid rgba(255,255,255,.12)!important; }
                  .leaflet-control-zoom a { background:rgba(15,23,42,.85)!important; color:#e2e8f0!important; border-bottom-color:rgba(255,255,255,.1)!important; }
                  .leaflet-control-zoom a:hover { background:rgba(99,102,241,.8)!important; }
                  .leaflet-tooltip {
                    background:rgba(15,23,42,.95)!important; border:1px solid rgba(255,255,255,.12)!important;
                    color:#f1f5f9!important; border-radius:10px!important; padding:5px 12px!important;
                    font-weight:600!important; font-size:12px!important; white-space:nowrap;
                    box-shadow:0 4px 16px rgba(0,0,0,.5)!important;
                  }
                  .leaflet-tooltip::before { display:none!important; }
                `;
                document.head.appendChild(s);
            }

            function makeIcon(loc: MapLocation, isActive: boolean) {
                return L.divIcon({
                    className: "",
                    html: `<div class="ep${isActive ? " ep--active" : ""}"><div class="ep__b"><span>${loc.emoji}</span></div><div class="ep__stem"></div><div class="ep__pulse"></div></div>`,
                    iconSize: [40, 52],
                    iconAnchor: [20, 52],
                    tooltipAnchor: [0, -54],
                });
            }

            // Add markers
            mapLocations.forEach((loc) => {
                const marker = L.marker([loc.lat, loc.lng], { icon: makeIcon(loc, false) })
                    .addTo(map)
                    .bindTooltip(loc.name, { direction: "top", permanent: false, opacity: 1 });

                marker.on("click", () => {
                    map.flyTo([loc.lat, loc.lng], 16, { duration: 1.2 });
                    setActiveLocation((prev) => (prev?.id === loc.id ? null : loc));
                });

                markersRef.current.push({ marker, loc });
            });

            mapInstanceRef.current = { map, L, makeIcon };

            // Force Leaflet to recalculate size (fixes black tile issues)
            setTimeout(() => map.invalidateSize(), 200);
        }

        init();
        return () => { destroyed = true; };
    }, []);

    // Update marker icons when active selection changes
    useEffect(() => {
        if (!mapInstanceRef.current) return;
        const { L, makeIcon } = mapInstanceRef.current;
        if (!L) return;
        markersRef.current.forEach(({ marker, loc }) => {
            marker.setIcon(makeIcon(loc, activeLocation?.id === loc.id));
        });
    }, [activeLocation]);

    return (
        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/10" style={{ height: "75vh", minHeight: "540px" }}>

            {/* Map div — explicit inline height is critical for Leaflet */}
            <div
                ref={mapContainerRef}
                style={{ width: "100%", height: "100%", background: "#0f172a" }}
            />

            {/* ── Details panel ── */}
            {activeLocation && (
                <div className="absolute inset-0 z-[1000] flex items-end sm:items-center justify-end p-0 sm:p-5 pointer-events-none">
                    <div
                        className="absolute inset-0 bg-black/20 pointer-events-auto"
                        onClick={() => setActiveLocation(null)}
                    />
                    <div className="relative pointer-events-auto w-full sm:w-96 bg-slate-950/90 backdrop-blur-2xl border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[85vh]">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-indigo-600/80 to-teal-600/80 p-6 flex justify-between items-start border-b border-white/10">
                            <h3 className="text-xl font-black text-white flex items-center gap-2.5 leading-tight">
                                <span className="text-3xl">{activeLocation.emoji}</span>
                                {activeLocation.name}
                            </h3>
                            <button
                                onClick={() => setActiveLocation(null)}
                                className="ml-3 p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 overflow-y-auto flex-1 space-y-5">
                            <p className="text-slate-300 text-sm leading-relaxed">{activeLocation.description}</p>

                            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5">
                                <h4 className="font-bold text-amber-400 text-xs uppercase tracking-wider mb-3">✨ Fun Things To Do</h4>
                                <ul className="space-y-2">
                                    {activeLocation.funThings.map((thing, idx) => (
                                        <li key={idx} className="flex items-start text-slate-200 gap-2 text-sm">
                                            <span className="text-amber-400 mt-0.5 flex-shrink-0">•</span>{thing}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />How to Get There
                                </h4>
                                <div className="space-y-2">
                                    {activeLocation.transport.walking && (
                                        <div className="flex items-center gap-3 bg-slate-800/60 border border-white/5 p-3.5 rounded-xl">
                                            <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400"><Navigation className="w-4 h-4" /></div>
                                            <div><div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Walking</div><div className="font-semibold text-slate-200 text-sm">{activeLocation.transport.walking}</div></div>
                                        </div>
                                    )}
                                    {activeLocation.transport.public && (
                                        <div className="flex items-center gap-3 bg-slate-800/60 border border-white/5 p-3.5 rounded-xl">
                                            <div className="bg-teal-500/20 p-2 rounded-lg text-teal-400"><Bus className="w-4 h-4" /></div>
                                            <div><div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Public Transport</div><div className="font-semibold text-slate-200 text-sm">{activeLocation.transport.public}</div></div>
                                        </div>
                                    )}
                                    {activeLocation.transport.car && (
                                        <div className="flex items-center gap-3 bg-slate-800/60 border border-white/5 p-3.5 rounded-xl">
                                            <div className="bg-violet-500/20 p-2 rounded-lg text-violet-400"><Car className="w-4 h-4" /></div>
                                            <div><div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">By Car</div><div className="font-semibold text-slate-200 text-sm">{activeLocation.transport.car}</div></div>
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
