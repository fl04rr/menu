import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { ROUTES } from "./constants/routes";
import { useBreakpoints } from "./useBreakpoints";

interface MenuContextType {
    isMenuOpen: boolean;
    defaultPath: string;
    currentPath: string;
    toggleMenuOpen: (isOpen: boolean) => void;
    onChange: (path: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenuContext must be used within a MenuProvider");
    }
    return context;
};

interface MenuProviderProps {
    children: ReactNode;
    defaultPath?: string;
    onChange: (path: string) => void;
    currentPath: string;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children, defaultPath = "/", onChange, currentPath }) => {
    const [isMenuOpen, toggleMenuOpen] = useState(false);
    const { isMd, isBreakpointsReady } = useBreakpoints();

    const handleChange = useCallback(
        (path: string) => {
            onChange(path);
            const hasSubPath = Object.values(ROUTES).some((basePath) => {
                return path.startsWith(`${basePath}/`) || basePath.includes(`${path}/`);
            });
            if (hasSubPath) {
                toggleMenuOpen(true);
            }
        },
        [onChange]
    );

    useEffect(() => {
        if (isMd) {
            handleChange(currentPath);
        }
    }, [isBreakpointsReady]);

    return (
        <MenuContext.Provider value={{ isMenuOpen, defaultPath, currentPath, toggleMenuOpen, onChange: handleChange }}>
            {children}
        </MenuContext.Provider>
    );
};
