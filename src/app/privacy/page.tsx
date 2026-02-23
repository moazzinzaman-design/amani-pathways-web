import { Shield, Lock, FileText, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <>
            {/* Header */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 py-20 sm:py-28 pt-32 lg:pt-40">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl animate-float-slow" />
                    <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-3xl animate-float" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-teal-300 text-xs font-medium mb-6 border border-white/10">
                        <Shield className="w-3.5 h-3.5" />
                        Data Protection
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                        Privacy <span className="gradient-text">Policy</span>
                    </h1>
                    <p className="mt-5 text-lg text-slate-300/90 leading-relaxed max-w-2xl mx-auto">
                        How Amani Pathways Ltd collects, uses, and protects your personal information in compliance with UK GDPR.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-indigo max-w-none">

                    <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-10 flex gap-4 items-start">
                        <Lock className="w-6 h-6 text-indigo-600 shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 mt-0">Our Commitment to Privacy</h3>
                            <p className="text-slate-600 mb-0 text-sm leading-relaxed">
                                Amani Pathways Ltd is committed to protecting the privacy and security of all individuals, especially the vulnerable young people in our care. This policy outlines our practices regarding data collection and usage.
                            </p>
                        </div>
                    </div>

                    <h2>1. Information We Collect</h2>
                    <p>We may collect and process the following data:</p>
                    <ul>
                        <li><strong>Referral Information:</strong> Names, contact details, and professional roles of referring social workers or commissioners.</li>
                        <li><strong>Young Person Data:</strong> Sensitive information necessary for providing care, collected securely through our referral process and during placement. This is highly restricted and securely stored.</li>
                        <li><strong>Website Analytics:</strong> Basic, anonymized usage data (via cookies) to improve our site performance.</li>
                    </ul>

                    <h2>2. How We Use Your Data</h2>
                    <p>Your data is used strictly for legitimate business purposes, including:</p>
                    <ul>
                        <li>Assessing and processing placement referrals.</li>
                        <li>Providing tailored, trauma-informed care and support.</li>
                        <li>Communicating with local authorities and relevant stakeholders.</li>
                        <li>Complying with Ofsted regulations and safeguarding legal requirements.</li>
                    </ul>

                    <h2>3. Data Security and Storage</h2>
                    <p>We employ strict technical and organizational measures to ensure your data is secure against unauthorized access, loss, or destruction. Sensitive records pertaining to young people are kept in encrypted, access-controlled digital environments and secure physical locations where necessary.</p>

                    <h2>4. Sharing Your Information</h2>
                    <p>We do not sell or rent your personal data to third parties. We only share information with:</p>
                    <ul>
                        <li>Local Authorities and Social Workers directly involved in a young person's care.</li>
                        <li>Regulatory bodies such as Ofsted, when legally required.</li>
                        <li>Emergency services or healthcare professionals where there is a vital safeguarding concern.</li>
                    </ul>

                    <h2>5. Your Rights (UK GDPR)</h2>
                    <p>Under the UK General Data Protection Regulation, you have rights regarding your data, including:</p>
                    <ul>
                        <li>The right to access your personal data.</li>
                        <li>The right to rectification of inaccurate data.</li>
                        <li>The right to erasure ("right to be forgotten"), subject to our legal obligations.</li>
                        <li>The right to restrict or object to processing.</li>
                    </ul>

                    <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-200">
                        <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-4 mt-0">
                            <Mail className="w-5 h-5 text-teal-600" />
                            Contact Our Data Protection Officer
                        </h3>
                        <p className="text-slate-600 text-sm mb-4">
                            If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:
                        </p>
                        <p className="font-medium text-slate-800 text-sm">
                            Email: <a href="mailto:info@amanipathways.co.uk" className="text-indigo-600 hover:text-indigo-800">info@amanipathways.co.uk</a><br />
                            Address: Halifax, West Yorkshire (Full address available upon verified request)
                        </p>
                    </div>

                    <p className="text-xs text-slate-400 mt-12 text-center">
                        Last Updated: October 2023
                    </p>

                </div>
            </section>
        </>
    );
}
