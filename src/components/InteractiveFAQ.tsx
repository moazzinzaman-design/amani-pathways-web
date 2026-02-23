"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "How do I make a referral?",
        answer: "Local Authorities can make a referral securely through our website by navigating to the 'Referrals' page. You will need to provide basic details about the young person and their requirements. Referrals are reviewed by our placement team within 24 hours.",
    },
    {
        question: "What age group do you support?",
        answer: "We specialize in providing supported accommodation and care for Unaccompanied Asylum-Seeking Children (UASC) aged 16 to 17 years old.",
    },
    {
        question: "Are your services Ofsted registered?",
        answer: "Yes, Amani Pathways Ltd is fully registered and regulated by Ofsted as a Supported Accommodation provider for young people aged 16-17.",
    },
    {
        question: "Do you provide language support?",
        answer: "Absolutely. We understand the unique challenges faced by UASC. We facilitate ESOL (English for Speakers of Other Languages) enrollment and provide multi-lingual support staff where possible to aid communication and integration.",
    },
    {
        question: "What security measures are in place?",
        answer: "Our properties have 24/7 staffing, secure entry systems, and CCTV covering external areas (respecting privacy laws and internal house rules). All staff undergo enhanced DBS checks and safeguarding training.",
    },
];

function FAQItem({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
    return (
        <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-slate-800 pr-8">{item.question}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-indigo-100 text-indigo-600 rotate-180" : "bg-slate-50 text-slate-400"}`}>
                    <ChevronDown className="w-4 h-4" />
                </div>
            </button>

            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                aria-hidden={!isOpen}
            >
                <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-50/50 pt-2">
                    {item.answer}
                </div>
            </div>
        </div>
    );
}

export default function InteractiveFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const toggleItem = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section className="py-20 sm:py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 mb-6 shadow-sm">
                        <MessageCircleQuestion className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
                        Quick answers to common questions about our supported accommodation, referrals, and care methodologies.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            item={faq}
                            isOpen={openIndex === index}
                            onClick={() => toggleItem(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
