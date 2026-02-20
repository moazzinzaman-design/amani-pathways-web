"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
    words: string[];
    /** ms to type each character */
    typeSpeed?: number;
    /** ms to delete each character */
    deleteSpeed?: number;
    /** ms to pause after fully typed */
    pauseAfter?: number;
    className?: string;
}

/**
 * UPGRADE #10 — Typewriter effect
 * Cycles through an array of words, typing and deleting them
 * with a blinking cursor.
 */
export default function Typewriter({
    words,
    typeSpeed = 60,
    deleteSpeed = 35,
    pauseAfter = 2200,
    className = "",
}: TypewriterProps) {
    const [displayed, setDisplayed] = useState("");
    const [wordIdx, setWordIdx] = useState(0);
    const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
    const charIdx = useRef(0);

    useEffect(() => {
        const word = words[wordIdx % words.length];
        let timeout: ReturnType<typeof setTimeout>;

        if (phase === "typing") {
            if (charIdx.current < word.length) {
                timeout = setTimeout(() => {
                    setDisplayed(word.slice(0, charIdx.current + 1));
                    charIdx.current += 1;
                }, typeSpeed);
            } else {
                timeout = setTimeout(() => setPhase("pausing"), pauseAfter);
            }
        } else if (phase === "pausing") {
            setPhase("deleting");
        } else {
            // deleting
            if (charIdx.current > 0) {
                timeout = setTimeout(() => {
                    charIdx.current -= 1;
                    setDisplayed(word.slice(0, charIdx.current));
                }, deleteSpeed);
            } else {
                setWordIdx((i) => i + 1);
                setPhase("typing");
            }
        }

        return () => clearTimeout(timeout);
    }, [displayed, phase, wordIdx, words, typeSpeed, deleteSpeed, pauseAfter]);

    return (
        <span className={className}>
            {displayed}
            <span className="typewriter-cursor" aria-hidden />
        </span>
    );
}
