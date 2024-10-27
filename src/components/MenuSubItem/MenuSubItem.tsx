import { handleClick } from "../../helpers/helpers";
import { useMenuContext } from "../../MenuProvider";
import { useBreakpoints } from "../../useBreakpoints";

type MenuSubItemProps = {
    title: string;
    link: string;
};

export default function MenuSubItem({ title, link }: MenuSubItemProps) {
    const { currentPath, toggleMenuOpen } = useMenuContext();
    const { isMd } = useBreakpoints();

    const handleSubItemClick = (path: string, event: React.MouseEvent) => {
        handleClick(path, event);
        if (!isMd) {
            toggleMenuOpen(false);
        }
    };

    return (
        <a
            href={link}
            className={`px-2 transition py-1 border-l-2 md:hover:text-violet-400 overflow-hidden shrink-0 ${
                currentPath.includes(link) && "border-violet-400 text-violet-400"
            }`}
            onClick={(e) => handleSubItemClick(link, e)}
        >
            {title}
        </a>
    );
}
