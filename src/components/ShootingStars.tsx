"use client";

import { useEffect, useState } from "react";

export default function ShootingStars() {
    const [stars, setStars] = useState<{ id: number; top: number; left: number; delay: number }[]>([]);

    useEffect(() => {
        // Generate a few random stars
        const newStars = Array.from({ length: 5 }).map((_, i) => ({
            id: i,
            top: Math.random() * 50 - 20, // start near top
            left: Math.random() * 100 - 20, // start anywhere horizontally
            delay: Math.random() * 10,
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="shooting-star"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                    }}
                />
            ))}
        </div>
    );
}
