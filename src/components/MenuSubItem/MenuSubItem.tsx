import { useMenuContext } from "../../MenuProvider";
import { MenuSubItemProps } from "../../types/types";
import { useBreakpoints } from "../../useBreakpoints";

export default function MenuSubItem({ title, handleClick, isActive }: MenuSubItemProps) {
    const { toggleMenuOpen } = useMenuContext();
    const { isMd } = useBreakpoints();

    const onClick = () => {
        handleClick();
        if (!isMd) {
            toggleMenuOpen(false);
        }
    };

    return (
        <button
            className={`px-2 text-left transition py-1 border-l-2 md:hover:text-violet-400 max-[767px]:border-violet-400 overflow-hidden shrink-0 ${
                isActive && "border-violet-400 text-violet-400"
            }`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
