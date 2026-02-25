'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Outfit } from 'next/font/google';
import {
    Chart,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    RadarController,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    DoughnutController,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
Chart.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    RadarController,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    DoughnutController,
    ArcElement,
    Tooltip,
    Legend
);

const outfit = Outfit({
    variable: '--font-outfit',
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '600', '700'],
});

// --- Utility: Label Wrapping Logic ---
function wrapLabel(str: string, maxLen = 16): string | string[] {
    if (str.length <= maxLen) return str;
    const words = str.split(' ');
    const lines: string[] = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        if (currentLine.length + 1 + words[i].length <= maxLen) {
            currentLine += ' ' + words[i];
        } else {
            lines.push(currentLine);
            currentLine = words[i];
        }
    }
    lines.push(currentLine);
    return lines;
}

// --- Tooltip config ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tooltipConfig: any = {
    callbacks: {
        title: function (tooltipItems: any[]) {
            const item = tooltipItems[0];
            const label = item.chart.data.labels[item.dataIndex];
            if (Array.isArray(label)) {
                return label.join(' ');
            } else {
                return label;
            }
        },
    },
};

// Result data type
interface ResultData {
    focusTags: { label: string; color: string }[];
    interventionText: string;
    riskText: string;
}

export default function ServiceOverviewPage() {
    // Chart refs
    const costChartRef = useRef<HTMLCanvasElement>(null);
    const radarChartRef = useRef<HTMLCanvasElement>(null);
    const doughnutChartRef = useRef<HTMLCanvasElement>(null);

    // Interactive demo state
    const [tenantInput, setTenantInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<ResultData | null>(null);

    // Initialize charts
    useEffect(() => {
        const charts: Chart[] = [];

        // --- Chart 1: Cost Comparison (Bar) ---
        if (costChartRef.current) {
            const costLabels = ['Emergency B&B / Nightly Paid', 'Amani Pathways Supported Living'];
            const wrappedCostLabels = costLabels.map((l) => wrapLabel(l, 20));

            const costChart = new Chart(costChartRef.current, {
                type: 'bar',
                data: {
                    labels: wrappedCostLabels,
                    datasets: [
                        {
                            label: 'Weekly Cost (£)',
                            data: [850, 450],
                            backgroundColor: ['#ef4444', '#0d9488'],
                            borderRadius: 6,
                            barPercentage: 0.6,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: tooltipConfig,
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: { display: true, text: 'Weekly Cost (£)' },
                        },
                    },
                },
            });
            charts.push(costChart);
        }

        // --- Chart 2: Quality Radar ---
        if (radarChartRef.current) {
            const qualityLabels = [
                'Safeguarding Protocols',
                'Staff Training',
                'Incident Response Time',
                'Tenant Wellbeing',
                'Property Quality',
            ];
            const wrappedQualityLabels = qualityLabels.map((l) => wrapLabel(l, 15));

            const radarChart = new Chart(radarChartRef.current, {
                type: 'radar',
                data: {
                    labels: wrappedQualityLabels,
                    datasets: [
                        {
                            label: 'Amani Compliance Score (%)',
                            data: [98, 95, 100, 92, 96],
                            fill: true,
                            backgroundColor: 'rgba(13, 148, 136, 0.2)',
                            borderColor: '#0d9488',
                            pointBackgroundColor: '#f97316',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: '#f97316',
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: tooltipConfig,
                        legend: { display: false },
                    },
                    scales: {
                        r: {
                            angleLines: { color: '#e2e8f0' },
                            grid: { color: '#e2e8f0' },
                            suggestedMin: 50,
                            suggestedMax: 100,
                        },
                    },
                },
            });
            charts.push(radarChart);
        }

        // --- Chart 3: Referral Doughnut ---
        if (doughnutChartRef.current) {
            const referralLabels = ['Housing Teams', 'Probation Services', 'Adult Social Care', 'Charity Referrals'];
            const wrappedReferralLabels = referralLabels.map((l) => wrapLabel(l, 18));

            const doughnutChart = new Chart(doughnutChartRef.current, {
                type: 'doughnut',
                data: {
                    labels: wrappedReferralLabels,
                    datasets: [
                        {
                            data: [50, 20, 20, 10],
                            backgroundColor: ['#0d9488', '#f97316', '#1e3a8a', '#94a3b8'],
                            borderWidth: 0,
                            hoverOffset: 4,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: tooltipConfig,
                        legend: { display: false },
                    },
                    cutout: '70%',
                },
            });
            charts.push(doughnutChart);
        }

        // Cleanup: destroy all charts on unmount
        return () => {
            charts.forEach((chart) => chart.destroy());
        };
    }, []);

    // Generate response handler
    const handleGenerate = useCallback(() => {
        const input = tenantInput.toLowerCase();
        setIsLoading(true);
        setResult(null);

        setTimeout(() => {
            const focusTags: { label: string; color: string }[] = [];
            let interventions = '';
            let riskStrat = '';

            if (input.includes('debt') || input.includes('money') || input.includes('budget')) {
                focusTags.push({ label: 'Financial Literacy', color: 'green' });
                interventions +=
                    "Tenant will be enrolled in our 'Money Skills' module. Weekly budget planning sessions with Key Worker to manage arrears and establish rent payment patterns. ";
            }

            if (input.includes('anxiety') || input.includes('mental') || input.includes('depress')) {
                focusTags.push({ label: 'Mental Health Support', color: 'blue' });
                interventions +=
                    'Connection to local talking therapies. Staff will utilize trauma-informed communication. Quiet hours established in house rules to support anxiety management. ';
            }

            if (input.includes('cooking') || input.includes('clean') || input.includes('skill')) {
                focusTags.push({ label: 'Independent Living Skills', color: 'orange' });
                interventions +=
                    '1-to-1 cooking sessions twice weekly. Daily hygiene checklists implemented with positive reinforcement strategy. ';
            }

            // Default fallbacks
            if (focusTags.length === 0) {
                focusTags.push({ label: 'Core Stability', color: 'teal' });
                focusTags.push({ label: 'Community Integration', color: 'indigo' });
                interventions =
                    'Standard induction to Amani Pathways. Focus on registering with GP, Dentist, and applying for Universal Credit. Baseline skills assessment to be conducted within 72 hours.';
            }

            riskStrat =
                'Enhanced nightly checks for first 14 days. Staff to monitor peer dynamics closely. Weekly reports sent to Commissioning Team via secure portal.';

            setIsLoading(false);
            setResult({ focusTags, interventionText: interventions, riskText: riskStrat });
        }, 1500);
    }, [tenantInput]);

    // Tag color mapping
    const tagColors: Record<string, string> = {
        green: 'bg-green-100 text-green-800',
        blue: 'bg-blue-100 text-blue-800',
        orange: 'bg-orange-100 text-orange-800',
        teal: 'bg-teal-100 text-teal-800',
        indigo: 'bg-indigo-100 text-indigo-800',
    };

    return (
        <div className={`${outfit.variable}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
            {/* Scoped styles */}
            <style jsx>{`
        .chart-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          height: 350px;
          max-height: 400px;
        }
        @media (max-width: 640px) {
          .chart-container {
            height: 300px;
          }
        }
        .step-arrow {
          font-size: 2rem;
          color: #0d9488;
        }
        @media (max-width: 768px) {
          .step-arrow {
            transform: rotate(90deg);
            margin: 10px 0;
          }
        }
      `}</style>

            {/* Hero Section */}
            <header className="bg-blue-900 text-white py-16 px-4 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 text-9xl font-bold -mr-16 -mt-10 select-none">CARE</div>
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <div className="inline-flex gap-2 mb-6 flex-wrap justify-center">
                        <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
                            Local Authority Partner
                        </span>
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
                            CQC Aligned Standards
                        </span>
                        <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
                            24/7 Support
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">AMANI PATHWAYS</h1>
                    <p className="text-xl md:text-2xl text-teal-100 font-light max-w-3xl mx-auto">
                        Empowering Lives Through Tailored Supported Living in West Yorkshire.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <a
                            href="#needs-analysis"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
                        >
                            View Sufficiency Data
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content Container */}
            <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
                {/* Executive Summary (KPI Cards) */}
                <section>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-800">Executive Summary</h2>
                        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
                            Delivering measurable outcomes for vulnerable adults through our robust PropCo/OpCo model.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-teal-600 transform hover:scale-105 transition-all duration-300">
                            <div className="text-4xl mb-4">🛡️</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">100% Safeguarding</h3>
                            <p className="text-slate-600">
                                Rigorous protocols aligned with West Yorkshire Police and Adult Social Care frameworks ensuring total
                                tenant safety.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-500 transform hover:scale-105 transition-all duration-300">
                            <div className="text-4xl mb-4">📝</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Tailored Plans</h3>
                            <p className="text-slate-600">
                                Bespoke support strategies focusing on life skills, budgeting, and mental health management for every
                                individual.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-900 transform hover:scale-105 transition-all duration-300">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Move-On Focus</h3>
                            <p className="text-slate-600">
                                A clear pathway to independence. We measure success by how quickly tenants no longer need us.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Needs Analysis (Bar Chart) */}
                <section id="needs-analysis" className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-800 mb-4">The Cost of Inaction</h2>
                                <p className="text-slate-600 mb-6 text-lg">
                                    Commissioners in West Yorkshire face a critical challenge: the high cost of emergency placement
                                    breakdowns.
                                </p>
                                <p className="text-slate-600 mb-6">
                                    Placing vulnerable adults in unregulated B&amp;Bs is not only expensive but often leads to readmission
                                    into the care system. Amani Pathways provides a structured, regulated alternative that significantly
                                    reduces the burden on the public purse while improving outcomes.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center text-slate-700">
                                        <span className="text-red-500 mr-2 text-xl">⚠️</span> Unregulated B&amp;Bs offer zero support.
                                    </li>
                                    <li className="flex items-center text-slate-700">
                                        <span className="text-teal-600 mr-2 text-xl">✅</span> Amani offers 24/7 on-call support.
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-6 shadow-inner">
                                <h3 className="text-lg font-semibold text-center mb-4 text-slate-700">
                                    Weekly Cost Comparison (Avg.)
                                </h3>
                                <div className="chart-container">
                                    <canvas ref={costChartRef} />
                                </div>
                                <p className="text-center text-sm text-slate-500 mt-4 italic">
                                    Source: West Yorkshire Commissioning Data Estimates 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Support Journey (Flowchart) */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800">The Tenant Journey</h2>
                        <p className="text-slate-600 mt-2">A structured pathway from referral to independence.</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
                        {/* Step 1 */}
                        <div className="w-full md:w-1/4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-900 text-center z-10">
                            <div className="text-3xl mb-3">📩</div>
                            <h4 className="font-bold text-slate-800">1. Referral</h4>
                            <p className="text-sm text-slate-600 mt-2">Local Authority or Social Worker submits risk profile.</p>
                        </div>

                        <div className="step-arrow">➔</div>

                        {/* Step 2 */}
                        <div className="w-full md:w-1/4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-teal-600 text-center z-10">
                            <div className="text-3xl mb-3">🔍</div>
                            <h4 className="font-bold text-slate-800">2. Assessment</h4>
                            <p className="text-sm text-slate-600 mt-2">Compatibility match &amp; bespoke support planning.</p>
                        </div>

                        <div className="step-arrow">➔</div>

                        {/* Step 3 */}
                        <div className="w-full md:w-1/4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500 text-center z-10">
                            <div className="text-3xl mb-3">🏠</div>
                            <h4 className="font-bold text-slate-800">3. Placement</h4>
                            <p className="text-sm text-slate-600 mt-2">Move-in to Amani Property with key worker assigned.</p>
                        </div>

                        <div className="step-arrow">➔</div>

                        {/* Step 4 */}
                        <div className="w-full md:w-1/4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600 text-center z-10">
                            <div className="text-3xl mb-3">🗝️</div>
                            <h4 className="font-bold text-slate-800">4. Independence</h4>
                            <p className="text-sm text-slate-600 mt-2">Step-down to general needs housing.</p>
                        </div>
                    </div>
                </section>

                {/* Quality & Referrals Grid */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Quality Radar Chart */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Quality Assurance Framework</h3>
                        <p className="text-slate-600 mb-6 text-sm">
                            We audit our service monthly against key safety and wellbeing metrics to ensure CQC/Ofsted readiness.
                        </p>
                        <div className="chart-container">
                            <canvas ref={radarChartRef} />
                        </div>
                    </div>

                    {/* Referral Ecosystem Doughnut */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Referral Partners</h3>
                        <p className="text-slate-600 mb-6 text-sm">
                            We work collaboratively across the West Yorkshire health and social care ecosystem.
                        </p>
                        <div className="chart-container">
                            <canvas ref={doughnutChartRef} />
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-teal-600 rounded-full mr-2" /> Housing Teams
                            </div>
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2" /> Probation
                            </div>
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-blue-900 rounded-full mr-2" /> Adult Social Care
                            </div>
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-slate-400 rounded-full mr-2" /> Third Sector
                            </div>
                        </div>
                    </div>
                </section>

                {/* SROI / Financial Impact */}
                <section className="bg-blue-900 rounded-2xl shadow-xl text-white p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10 text-9xl">£</div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold mb-4">Social Return on Investment (SROI)</h2>
                            <p className="text-blue-100 text-lg mb-4">
                                Beyond the direct cost savings compared to emergency B&amp;Bs, Amani Pathways delivers substantial
                                long-term value to the taxpayer.
                            </p>
                            <p className="text-blue-200 text-sm">
                                By stabilizing vulnerable adults, we reduce police call-outs, A&amp;E admissions, and recidivism rates.
                                Every £1 invested in supported living generates approx. £3.50 in social value for the Calderdale
                                community.
                            </p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm text-center">
                            <div className="text-4xl font-bold text-orange-400 mb-2">£14,500</div>
                            <div className="text-sm text-blue-100">Avg. Annual Saving per Tenant vs. Residential Care</div>
                        </div>
                    </div>
                </section>

                {/* AI Integration: Smart Support Planner */}
                <section className="bg-gradient-to-br from-slate-100 to-white border border-slate-200 rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 inline-block">
                            Interactive Demo
                        </span>
                        <h2 className="text-3xl font-bold text-slate-800">Smart Care Response Generator</h2>
                        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
                            Placement Officers: Test how Amani Pathways builds a response for your specific cases. Enter a
                            hypothetical tenant profile below.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white p-2 rounded-xl shadow-md border border-slate-300 focus-within:ring-2 focus-within:ring-teal-500 transition-all">
                            <textarea
                                rows={3}
                                className="w-full p-4 text-slate-700 outline-none resize-none rounded-lg"
                                placeholder="E.g., 19-year-old care leaver, history of debt, anxiety, needs help with cooking..."
                                value={tenantInput}
                                onChange={(e) => setTenantInput(e.target.value)}
                            />
                            <div className="bg-slate-50 px-4 py-3 border-t border-slate-100 flex justify-between items-center rounded-b-lg">
                                <span className="text-xs text-slate-400">AI-Powered Simulation</span>
                                <button
                                    onClick={handleGenerate}
                                    className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-colors flex items-center"
                                >
                                    <span>Generate Response</span>
                                    <span className="ml-2">✨</span>
                                </button>
                            </div>
                        </div>

                        {/* Loading State */}
                        {isLoading && (
                            <div className="mt-8 text-center">
                                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-slate-200 border-t-teal-600" />
                                <p className="text-slate-500 text-sm mt-2">Analyzing Risk Profile &amp; Matching Services...</p>
                            </div>
                        )}

                        {/* Result Container */}
                        {result && !isLoading && (
                            <div className="mt-8 bg-white border border-teal-100 rounded-xl shadow-lg overflow-hidden animate-fade-up">
                                <div className="bg-teal-600 text-white px-6 py-3 flex justify-between items-center">
                                    <span className="font-bold">Amani Pathways Proposed Support Plan</span>
                                    <span className="text-xs bg-white/20 px-2 py-1 rounded">Draft V1.0</span>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">
                                            Primary Focus Areas
                                        </h4>
                                        <div className="flex gap-2 flex-wrap">
                                            {result.focusTags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`${tagColors[tag.color] || 'bg-gray-100 text-gray-800'} text-xs px-2 py-1 rounded font-semibold`}
                                                >
                                                    {tag.label}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">
                                            Proposed Interventions
                                        </h4>
                                        <p className="text-slate-700 leading-relaxed text-sm">{result.interventionText}</p>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                                        <h4 className="text-sm font-bold text-orange-800 mb-1">Risk Mitigation Strategy</h4>
                                        <p className="text-orange-700 text-sm">{result.riskText}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="mb-4 text-white font-bold text-xl">Amani Pathways Ltd.</p>
                    <p className="text-sm mb-6">Regulated Support. Secure Housing. Better Futures.</p>
                    <div className="flex justify-center gap-6 text-sm">
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Safeguarding Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Contact Commissioners
                        </a>
                    </div>
                    <p className="mt-8 text-xs opacity-50">&copy; 2024 Amani Pathways Ltd. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
