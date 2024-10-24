import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "./constants/routes";

interface MenuContextType {
    isMenuOpen: boolean;
    defaultPath: string;
    currentPath: string;
    toggleMenuOpen: (isOpen: boolean) => void;
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
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children, defaultPath = "/" }) => {
    const location = useLocation();
    const [isMenuOpen, toggleMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        const path = location.pathname;
        setCurrentPath(path);
        const hasSubPath = Object.values(ROUTES).some((basePath) => {
            return path.startsWith(`${basePath}/`) || basePath.includes(`${path}/`);
        });
        if (hasSubPath) {
            toggleMenuOpen(true);
        }
    }, [location.pathname]);

    return (
        <MenuContext.Provider value={{ isMenuOpen, defaultPath, currentPath, toggleMenuOpen }}>
            {children}
        </MenuContext.Provider>
    );
};
