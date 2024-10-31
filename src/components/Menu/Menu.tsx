import { BsChevronBarRight } from "react-icons/bs";
import { useMenuContext } from "../../MenuProvider";
import { useBreakpoints } from "../../useBreakpoints";
import { MenuProps } from "../../types/types";

export default function Menu({ children }: MenuProps) {
    const { isMenuOpen, toggleMenuOpen } = useMenuContext();
    const { isMd } = useBreakpoints();

    if (isMd === null) return null;

    return (
        <section
            className={`fixed z-10 bottom-0 transition-all duration-800 md:top-0 left-0 md:h-full w-full md:w-20 md:max-w-80 py-4 md:p-4 bg-slate-100 flex md:flex-col justify-between ${
                isMenuOpen && "md:w-auto"
            }`}
        >
            <nav className="flex md:flex-col gap-3 md:gap-2 md:max-h-full md:overflow-y-auto md:overflow-x-clip max-[767px]:overflow-x-auto max-[767px]:items-center max-[767px]:px-4">
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
