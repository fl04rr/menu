import { useMenuContext } from "../../MenuProvider";
import { BsXLg } from "react-icons/bs";
import { IconType } from "react-icons";
import { useBreakpoints } from "../../useBreakpoints";

type MenuItemProps = {
    title: string;
    Icon: IconType;
    children?: React.ReactNode;
    link: string;
};

export default function MenuItem({ Icon, title, link, children }: MenuItemProps) {
    const { isMenuOpen, currentPath, toggleMenuOpen, onChange } = useMenuContext();

    const handleClick = (path: string, event: React.MouseEvent) => {
        event.preventDefault();
        onChange(path);
    };

    const isCurrentPage = currentPath.includes(link);
    const { isMd } = useBreakpoints();

    return (
        <div className={`group max-[767px]:contents`}>
            <a
                href={link}
                className={`max-[767px]:relative rounded-xl gap-1 md:gap-0 md:hover:bg-slate-200 max-[767px]:max-w-24 flex max-[767px]:flex-col items-center p-3 transition-colors ${
                    isCurrentPage && "bg-violet-200 md:hover:bg-violet-300"
                }`}
                onClick={(e) => handleClick(link, e)}
                aria-label={title}
            >
                {!isMd &&
                    isCurrentPage && ( // circle
                        <div
                            className={`absolute w-2 h-2 transition-opacity rounded-full bg-violet-500 right-2 top-2 opacity-0 ${
                                currentPath.split("/").length > 2 && "opacity-100"
                            }`}
                        />
                    )}
                <Icon className="size-6 shrink-0" />
                <span
                    className={`max-[767px]:w-full text-xs md:text-base max-[767px]:text-sm md:opacity-0 md:w-0 transition-opacity overflow-hidden ${
                        isMenuOpen ? "md:visible md:opacity-100 md:w-auto md:pl-4" : "md:invisible"
                    }`}
                >
                    {title}
                </span>
            </a>
            {!isMenuOpen && (
                <div
                    className={`bg-slate-600 p-2 pb-0 rounded-md hidden md:group-hover:flex md:max-w-32 flex-col absolute right-4 -translate-y-full translate-x-full -mt-1/2 text-slate-50 max-h-36`}
                >
                    <span className="text-slate-50 whitespace-nowrap max-2-1/2 font-medium overflow-hidden shrink-0">
                        {title}
                    </span>
                    <div className="flex flex-col h-full overflow-y-auto pb-2">{children}</div>

                    <div className="bg-inherit rotate-45 p-1 absolute bottom-2 -translate-y-1/2 left-0 -translate-x-1/2" />
                </div>
            )}
            {isMenuOpen && isCurrentPage && children && (
                <div className="max-[767px]:hidden absolute left-0 bg-slate-100 z-10 md:static flex flex-col gap-2 p-2 md:pl-5">
                    {children}
                </div>
            )}

            {children && (
                <div
                    className={`md:hidden transition-transform ${!isMenuOpen && isCurrentPage && "translate-y-0"} ${
                        (!isMenuOpen || !isCurrentPage) && "translate-y-full"
                    } ${
                        isCurrentPage && "z-10"
                    } max-h-50-vh  absolute bottom-0 left-0 max-[767px]:p-6 max-[767px]:w-full max-[767px]:rounded-t-2xl bg-slate-100 md:static flex flex-col gap-2 md:pl-5 max-[767px]:pb-0 `}
                >
                    <div className={`md:hidden flex justify-between items-center gap-8`}>
                        <span className="font-bold overflow-hidden">{title}</span>
                        <button onClick={() => toggleMenuOpen(false)}>
                            <BsXLg className={`size-6 shrink-0`} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 overflow-y-auto w-full max-h-full max-[767px]:pb-12 ">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
