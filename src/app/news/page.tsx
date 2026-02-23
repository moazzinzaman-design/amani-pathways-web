"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag, Sparkles, Clock } from "lucide-react";

// Mock data for news articles
const newsItems = [
    {
        id: "1",
        title: "Amani Pathways Awarded Outstanding by Ofsted",
        excerpt: "We are thrilled to announce that following our recent inspection, our 5-bedroom supported accommodation provision has been rated Outstanding across all areas.",
        category: "Announcements",
        date: "October 15, 2025",
        author: "Amani Management Team",
        image: "/images/halifax-market.png", // Using existing placeholder images
        readTime: "3 min read"
    },
    {
        id: "2",
        title: "New ESOL Partnership Launched with Calderdale College",
        excerpt: "To further support our young people, we have established a direct referral pathway with Calderdale College, ensuring faster access to crucial English language courses.",
        category: "Partnerships",
        date: "September 28, 2025",
        author: "Education Coordinator",
        image: "/images/education-halifax.png",
        readTime: "2 min read"
    },
    {
        id: "3",
        title: "Summer Integration Program: Cooking from Home",
        excerpt: "Last week, our residents came together to cook traditional dishes from their home countries, sharing culture, stories, and building a stronger sense of community within the home.",
        category: "Resident Life",
        date: "August 12, 2025",
        author: "Key Worker Sarah",
        image: "/images/halifax-park.png",
        readTime: "4 min read"
    }
];

const categories = ["All", "Announcements", "Partnerships", "Resident Life"];

export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredNews = activeCategory === "All"
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory);

    return (
        <>
            {/* Header */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 py-20 sm:py-28">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-indigo-300 text-xs font-medium mb-6 border border-white/10">
                        <Sparkles className="w-3.5 h-3.5" />
                        Stay Informed
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        News & <span className="gradient-text">Updates</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Read the latest announcements, success stories, and updates from the Amani Pathways community and our partners across West Yorkshire.
                    </p>
                </div>
            </section>

            {/* Content Body */}
            <section className="py-20 sm:py-24 bg-slate-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Category Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                                    : "bg-white text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.map((news) => (
                            <article key={news.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 card-hover flex flex-col h-full">
                                {/* Image Container */}
                                <div className="relative h-56 w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                                    <Image
                                        src={news.image}
                                        alt={news.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-indigo-700 rounded-lg shadow-sm">
                                            {news.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {news.date}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {news.readTime}</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
                                        {news.title}
                                    </h2>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {news.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                                            <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                                                <User className="w-3 h-3 text-slate-400" />
                                            </div>
                                            {news.author}
                                        </div>
                                        <Link
                                            href={`/news/${news.id}`}
                                            className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 group/link"
                                        >
                                            Read More
                                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredNews.length === 0 && (
                        <div className="text-center py-20">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No updates found</h3>
                            <p className="text-slate-500">Check back later for more news in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
