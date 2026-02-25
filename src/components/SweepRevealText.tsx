"use client";

import { motion } from "framer-motion";

interface SweepRevealTextProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export default function SweepRevealText({ children, delay = 0, className = "" }: SweepRevealTextProps) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%", opacity: 0, rotateZ: 2 }}
                animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay,
                }}
                className="origin-bottom-left"
            >
                {children}
            </motion.div>
            <motion.div
                className="absolute inset-0 z-10 bg-indigo-500"
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: delay + 0.1,
                }}
            />
        </div>
    );
}
