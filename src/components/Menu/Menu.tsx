import { Link } from "react-router-dom";
import { MenuProps } from "../../types/types";
import { BsChevronBarRight } from "react-icons/bs";
import { useMenuContext } from "../../MenuProvider";
import { getInitials } from "../../helpers/helpers";

export default function Menu({ title, children }: MenuProps) {
    const { defaultPath, isMenuOpen, toggleMenuOpen } = useMenuContext();

    return (
        <section
            className={`fixed bottom-0 transition-all duration-800 md:top-0 left-0 md:h-full w-full md:w-20 py-4 md:p-4 bg-slate-100 flex md:flex-col justify-between ${
                isMenuOpen && "md:w-auto"
            }`}
        >
            <nav className="flex md:flex-col gap-2 md:max-h-full md:overflow-y-auto md:overflow-x-clip max-[767px]:overflow-x-auto max-[767px]:items-center max-[767px]:px-4">
                <Link to={defaultPath || "/"} className="mx-auto text-violet-500 font-bold">
                    {isMenuOpen ? title : getInitials(title)}
                </Link>
                {children}
            </nav>
            <div className="p-2 hidden md:block">
                <button onClick={() => toggleMenuOpen(!isMenuOpen)} className="p-2 hover:bg-slate-200 rounded-xl">
                    <BsChevronBarRight
                        className={`size-6 transition-transform duration-300 ${isMenuOpen && "rotate-180"}`}
                    />
                </button>
            </div>
        </section>
    );
}
