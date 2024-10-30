import { IconType } from "react-icons";

export type MenuSubItemProps = {
    title: string;
    handleClick: () => void;
    isActive: boolean;
};

export type MenuProps = {
    children: React.ReactNode;
};

export type MenuItemProps = {
    title: string;
    Icon?: IconType;
    isActive?: boolean;
    children?: React.ReactNode[];
    handleClick?: () => void;
};
