"use client";

import React, { useRef } from 'react';
import { VariableProximity } from './VariableProximity';
import { cn } from '@/lib/utils';

interface ProximityTextProps {
    children: string;
    className?: string;
}

export function ProximityText({ children, className }: ProximityTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    if (typeof children !== "string") {
        console.warn("ProximityText only accepts a string as children.");
        return <p className={className}>{children}</p>;
    }

    return (
        <div ref={containerRef} style={{ position: 'relative', display: 'inline' }}>
            <VariableProximity
                label={children}
                className={cn("", className)}
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={containerRef}
                radius={150}
                falloff="gaussian"
            />
        </div>
    );
}
