import { Link } from "react-router-dom";
import { MenuSubItemProps } from "../../types/types";
import { useMenuContext } from "../../MenuProvider";

export default function MenuSubItem({ title, link }: MenuSubItemProps) {
    const { currentPath } = useMenuContext();

    return (
        <Link
            to={link}
            className={`px-2 transition py-1 border-l-2 hover:text-violet-400 ${
                currentPath.includes(link) && "border-violet-400 text-violet-400"
            }`}
        >
            {title}
        </Link>
    );
}
