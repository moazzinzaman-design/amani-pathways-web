"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function GlowingOrbs() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1500], [0, -150]);
    const y3 = useTransform(scrollY, [0, 1500], [0, 100]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div
                style={{ y: y1 }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#6366f1]/20 rounded-full blur-[140px]"
            />
            <motion.div
                style={{ y: y2 }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#14b8a6]/20 rounded-full blur-[150px]"
            />
            <motion.div
                style={{ y: y3 }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-32 left-1/3 w-[450px] h-[450px] bg-[#f43f5e]/15 rounded-full blur-[160px]"
            />
        </div>
    );
}
