import React, { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextType {
    isMenuOpen: boolean;
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
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
    const [isMenuOpen, toggleMenuOpen] = useState(false);

    return (
        <MenuContext.Provider
            value={{
                isMenuOpen,
                toggleMenuOpen,
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};
