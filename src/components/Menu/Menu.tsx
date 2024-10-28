import { BsChevronBarRight } from "react-icons/bs";
import { useMenuContext } from "../../MenuProvider";
import { getInitials } from "../../helpers/helpers";
import { useEffect, useState } from "react";
import { useBreakpoints } from "../../useBreakpoints";

type MenuProps = {
    children: React.ReactNode;
    title: string;
};

export default function Menu({ title, children }: MenuProps) {
    const { defaultPath, isMenuOpen, toggleMenuOpen, currentPath, onChange } = useMenuContext();

    const [isInitial, setIsInitial] = useState(false); // fix onload blink
    const { isMd } = useBreakpoints();

    useEffect(() => {
        if (!isInitial) {
            setIsInitial(true);
        }
    }, [currentPath]);

    if (!isInitial || isMd === null) return null;

    const handleClick = (path: string, event: React.MouseEvent) => {
        event.preventDefault();
        onChange(path);
    };

    return (
        <section
            className={`fixed z-10 bottom-0 transition-all duration-800 md:top-0 left-0 md:h-full w-full md:w-20 md:max-w-80 py-4 md:p-4 bg-slate-100 flex md:flex-col justify-between ${
                isMenuOpen && "md:w-auto"
            }`}
        >
            <nav className="flex md:flex-col gap-3 md:gap-2 md:max-h-full md:overflow-y-auto md:overflow-x-clip max-[767px]:overflow-x-auto max-[767px]:items-center max-[767px]:px-4">
                <a
                    href={defaultPath}
                    className="mx-auto text-violet-700 font-bold"
                    onClick={(e) => handleClick(defaultPath, e)}
                >
                    {isMenuOpen ? title : getInitials(title)}
                </a>
                {children}
            </nav>
            <div className="p-2 hidden md:block">
                <button
                    onClick={() => toggleMenuOpen(!isMenuOpen)}
                    aria-label="Close button"
                    className="p-2 md:hover:bg-slate-200 rounded-xl"
                >
                    <BsChevronBarRight
                        className={`size-6 transition-transform duration-300 ${isMenuOpen && "rotate-180"}`}
                    />
                </button>
            </div>
        </section>
    );
}
