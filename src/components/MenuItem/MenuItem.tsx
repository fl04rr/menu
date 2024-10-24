import { Link } from "react-router-dom";
import { MenuItemProps } from "../../types/types";
import { useMenuContext } from "../../MenuProvider";
import { BsXLg } from "react-icons/bs";
export default function MenuItem({ icon, title, link, children }: MenuItemProps) {
    const { isMenuOpen, currentPath, toggleMenuOpen } = useMenuContext();

    return (
        <div className={`group max-[767px]:contents`}>
            <Link
                to={link}
                className={`rounded-xl md:hover:bg-slate-200 flex max-[767px]:flex-col items-center p-3 transition-colors ${
                    currentPath.includes(link) && "bg-violet-200 md:hover:bg-violet-300"
                }`}
            >
                {icon}
                <span
                    className={`md:opacity-0 md:w-0 transition-opacity ${
                        isMenuOpen ? "md:visible md:opacity-100 md:w-auto md:pl-4" : "md:invisible"
                    }`}
                >
                    {title}
                </span>
            </Link>
            {!isMenuOpen && (
                <div
                    className={`bg-slate-600 p-2 rounded-md hidden md:group-hover:flex flex-col absolute right-4 -translate-y-full translate-x-full -mt-1/2 text-slate-50`}
                >
                    <span className="text-slate-50 whitespace-nowrap font-medium">{title}</span>
                    {children}
                    <div className="bg-inherit rotate-45 p-1 absolute bottom-2 -translate-y-1/2 left-0 -translate-x-1/2"></div>
                </div>
            )}
            {isMenuOpen && currentPath.includes(link) && children && (
                <div className="max-[767px]:hidden absolute left-0 bg-slate-100 z-10 md:static flex flex-col gap-2 p-2 md:pl-5">
                    {children}
                </div>
            )}

            {children && (
                <div
                    className={`md:hidden transition-transform ${!isMenuOpen ? "translate-y-full" : "translate-y-0"} ${
                        currentPath.includes(link) && "z-10"
                    } absolute bottom-0 left-0 max-[767px]:p-5 max-[767px]:w-full max-[767px]:rounded-t-2xl bg-slate-100 max-[767px]:h-[50vh] md:static flex flex-col gap-2 p-2 md:pl-5`}
                >
                    <div className={`md:hidden flex justify-between items-center`}>
                        <span className="font-bold">{title}</span>
                        <button onClick={() => toggleMenuOpen(false)}>
                            <BsXLg className={`size-6`} />
                        </button>
                    </div>
                    {children}
                </div>
            )}
        </div>
    );
}
