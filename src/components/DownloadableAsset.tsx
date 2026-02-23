"use client";

import { Download, FileText, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function DownloadableAsset({
    title,
    description,
    fileName,
    fileSize,
    fileUrl
}: {
    title: string;
    description: string;
    fileName: string;
    fileSize: string;
    fileUrl: string;
}) {
    const [isDownloading, setIsDownloading] = useState(false);
    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleDownload = () => {
        setIsDownloading(true);
        // Simulate network delay for UI feedback
        setTimeout(() => {
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setIsDownloading(false);
            setIsDownloaded(true);

            // Reset state after 3 seconds
            setTimeout(() => setIsDownloaded(false), 3000);
        }, 800);
    };

    return (
        <div className="group relative flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 card-hover overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-sm border border-indigo-100/50">
                <FileText className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div className="flex-1 text-center sm:text-left z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">{description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg text-xs font-semibold text-slate-500 border border-slate-200">
                    <span className="uppercase tracking-wide">{fileName.split('.').pop()}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{fileSize}</span>
                </div>
            </div>

            <button
                onClick={handleDownload}
                disabled={isDownloading}
                className={`relative shrink-0 w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2.5 z-10 ${isDownloaded
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                        : "bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-lg hover:-translate-y-1"
                    }`}
            >
                {isDownloading ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Downloading...
                    </span>
                ) : isDownloaded ? (
                    <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" /> Downloaded
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <Download className="w-5 h-5" /> Download Pack
                    </span>
                )}
            </button>
        </div>
    );
}
