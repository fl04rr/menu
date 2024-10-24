export const getInitials = (title: string): string => {
    return title ? title.match(/\b\w/g)?.join("") || "" : "";
};
