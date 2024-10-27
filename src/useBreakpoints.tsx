import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.ts";

const fullConfig = resolveConfig(tailwindConfig);
const breakpoints = fullConfig.theme.screens;

interface BreakpointsType {
    isSm: boolean | null;
    isMd: boolean | null;
    isLg: boolean | null;
    isXl: boolean | null;
}

export const useBreakpoints = (): BreakpointsType => {
    const [breakpoint, setBreakpoint] = useState<BreakpointsType>({
        isSm: null,
        isMd: null,
        isLg: null,
        isXl: null,
    });

    const updateBreakpoints = () => {
        const width = window.innerWidth;
        setBreakpoint({
            isSm: width >= parseInt(breakpoints.sm),
            isMd: width >= parseInt(breakpoints.md),
            isLg: width >= parseInt(breakpoints.lg),
            isXl: width >= parseInt(breakpoints.xl),
        });
    };

    useEffect(() => {
        updateBreakpoints();
        window.addEventListener("resize", updateBreakpoints);
        return () => {
            window.removeEventListener("resize", updateBreakpoints);
        };
    }, []);

    return breakpoint;
};
