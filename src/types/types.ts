export type MenuProps = {
    children: React.ReactNode;
    title: string;
};

export type MenuItemProps = {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
    link: string;
};

export type MenuSubItemProps = Pick<MenuProps, "title"> & {
    link: string;
};
