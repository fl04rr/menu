import { useMenuContext } from "../../MenuProvider";
import { useBreakpoints } from "../../useBreakpoints";

type MenuSubItemProps = {
    title: string;
    link: string;
};

export default function MenuSubItem({ title, link }: MenuSubItemProps) {
    const { currentPath, toggleMenuOpen, onChange } = useMenuContext();
    const { isMd } = useBreakpoints();

    const handleClick = (path: string, event: React.MouseEvent) => {
        event.preventDefault();
        onChange(path);
        if (!isMd) {
            toggleMenuOpen(false);
        }
    };

    return (
        <a
            href={link}
            className={`px-2 transition py-1 border-l-2 md:hover:text-violet-400 max-[767px]:border-violet-400 overflow-hidden shrink-0 ${
                currentPath.includes(link) && "border-violet-400 text-violet-400"
            }`}
            onClick={(e) => handleClick(link, e)}
        >
            {title}
        </a>
    );
}
