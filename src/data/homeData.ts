import {
    Shield, Users, Home, HeartHandshake, Star, Zap, Globe, Heart, Eye, Handshake, Scale,
    Lightbulb, ClipboardList, Compass, GraduationCap, HouseIcon
} from "lucide-react";

export const pillars = [
    { icon: Users, title: "Leadership", description: "Experienced management delivering strategic oversight, Ofsted compliance, and a culture of continuous improvement.", gradient: "from-indigo-600 to-indigo-500", glow: "shadow-indigo-500/20", badge: "Strategic" },
    { icon: Shield, title: "Protection", description: "Robust safeguarding, DBS-checked staff, 24/7 supervision, and rigorous risk assessment frameworks.", gradient: "from-rose-500 to-rose-400", glow: "shadow-rose-500/20", badge: "Safeguarding" },
    { icon: Home, title: "Accommodation", description: "A high-quality, 5-bedroom home providing safe, warm, and culturally sensitive living environments.", gradient: "from-teal-500 to-teal-400", glow: "shadow-teal-500/20", badge: "Quality" },
    { icon: HeartHandshake, title: "Support", description: "Personalised pathways including ESOL, life-skills coaching, mental health support, and transition planning.", gradient: "from-amber-500 to-amber-400", glow: "shadow-amber-500/20", badge: "Holistic" },
];

export const highlights = [
    { text: "Ofsted regulated", icon: Shield },
    { text: "Trauma-informed care", icon: HeartHandshake },
    { text: "24/7 staffing", icon: Zap },
    { text: "Culturally sensitive", icon: Globe },
    { text: "Key-worker sessions", icon: Users },
    { text: "Pathway to independence", icon: Star },
];

export const coreValues = [
    { icon: Shield, title: "Safety First", description: "Every decision prioritises the physical and emotional safety of the young people in our care. Robust safeguarding is non-negotiable.", gradient: "from-rose-500 to-rose-400", bg: "bg-rose-50", color: "text-rose-600", border: "border-rose-100" },
    { icon: Heart, title: "Unconditional Respect", description: "We honour each young person's identity, culture, religion, and language. Every individual is treated with dignity and compassion.", gradient: "from-pink-500 to-rose-400", bg: "bg-pink-50", color: "text-pink-600", border: "border-pink-100" },
    { icon: Lightbulb, title: "Empowerment", description: "We build confidence and capability, giving young people the tools, skills, and agency to shape their own futures independently.", gradient: "from-amber-500 to-amber-400", bg: "bg-amber-50", color: "text-amber-600", border: "border-amber-100" },
    { icon: Eye, title: "Transparency", description: "We communicate openly with young people, their families, and commissioners — maintaining honest, clear records and reporting.", gradient: "from-teal-500 to-teal-400", bg: "bg-teal-50", color: "text-teal-600", border: "border-teal-100" },
    { icon: Handshake, title: "Collaboration", description: "We work in true partnership with local authorities, legal teams, healthcare providers, and communities for the best outcomes.", gradient: "from-indigo-600 to-indigo-500", bg: "bg-indigo-50", color: "text-indigo-600", border: "border-indigo-100" },
    { icon: Scale, title: "Integrity", description: "We hold ourselves to the highest professional and ethical standards — doing the right thing, especially when it's difficult.", gradient: "from-violet-500 to-violet-400", bg: "bg-violet-50", color: "text-violet-600", border: "border-violet-100" },
];

export const pathwaySteps = [
    { step: "01", icon: ClipboardList, title: "Referral & Matching", description: "Local Authority submits a referral. We assess suitability, capacity, and conduct a thorough matching process.", color: "from-indigo-600 to-indigo-500", glow: "shadow-indigo-500/25" },
    { step: "02", icon: Home, title: "Arrival & Welcome", description: "A warm, prepared welcome with a dedicated key worker, needs assessment, and immediate support.", color: "from-teal-500 to-teal-400", glow: "shadow-teal-500/25" },
    { step: "03", icon: Compass, title: "Personalised Support Plan", description: "A bespoke pathway plan co-created with the young person covering education, health, legal status and wellbeing.", color: "from-amber-500 to-amber-400", glow: "shadow-amber-500/25" },
    { step: "04", icon: GraduationCap, title: "Skills & Growth", description: "ESOL classes, life-skills coaching, mental health support, and regular key-worker sessions drive progress.", color: "from-rose-500 to-rose-400", glow: "shadow-rose-500/25" },
    { step: "05", icon: HouseIcon, title: "Transition to Independence", description: "A carefully managed move-on plan prepares the young person for independent living with ongoing aftercare.", color: "from-violet-500 to-violet-400", glow: "shadow-violet-500/25" },
];

export const heroWords = [
    "Independent Futures",
    "Confident Lives",
    "Belonging & Safety",
    "Lasting Pathways",
];
