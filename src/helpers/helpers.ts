import { useMenuContext } from "../MenuProvider";
const { onChange } = useMenuContext();

export const getInitials = (title: string): string => {
    return title ? title.match(/\b\w/g)?.join("") || "" : "";
};

export const handleClick = (path: string, event: React.MouseEvent) => {
    event.preventDefault();
    onChange(path);
};
