"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { X, ShieldCheck } from "lucide-react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = Cookies.get("cookie-consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        Cookies.set("cookie-consent", "true", { expires: 365 });
        setIsVisible(false);
    };

    const declineCookies = () => {
        Cookies.set("cookie-consent", "false", { expires: 365 });
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm animate-fade-up">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                    <button onClick={declineCookies} className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Close cookie banner">
                        <X className="w-4 h-4" />
                    </button>
                </div>

                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">Your Privacy</h3>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    We use cookies to improve your experience and analyze site traffic. By accepting, you agree to our use of cookies in accordance with UK GDPR.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={acceptCookies}
                        className="flex-1 bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-500 hover:to-teal-400 text-white text-sm font-semibold py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg"
                    >
                        Accept All
                    </button>
                    <button
                        onClick={declineCookies}
                        className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-semibold py-2.5 rounded-xl transition-all border border-slate-200"
                    >
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
}
