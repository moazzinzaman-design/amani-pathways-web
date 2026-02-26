"use client";

import React, { ReactNode } from "react";
import Tilt from "react-parallax-tilt";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    glareEnable?: boolean;
}

export default function TiltCard({ children, className = "", style, glareEnable = true }: TiltCardProps) {
    return (
        <Tilt
            className={`h-full w-full ${className}`}
            style={style}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            glareEnable={glareEnable}
            glareMaxOpacity={0.15}
            glareColor="#ffffff"
            glarePosition="all"
            glareBorderRadius="1.5rem"
        >
            {children}
        </Tilt>
    );
}
