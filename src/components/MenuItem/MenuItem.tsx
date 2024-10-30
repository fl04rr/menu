import { useMenuContext } from "../../MenuProvider";
import { BsXLg } from "react-icons/bs";
import { useBreakpoints } from "../../useBreakpoints";
import React from "react";
import { MenuItemProps, MenuSubItemProps } from "../../types/types";

export default function MenuItem({ Icon, title, isActive, children, handleClick }: MenuItemProps) {
    const { isMenuOpen, toggleMenuOpen } = useMenuContext();
    const { isMd } = useBreakpoints();

    const handleMenuItemClick = () => {
        if (!isMd && children) {
            isActive = true;
            toggleMenuOpen(!isMenuOpen);
        }
        if (handleClick) {
            handleClick();
        }
    };

    if (children) {
        const firstChild = children[0];
        if (React.isValidElement<MenuSubItemProps>(firstChild)) {
            handleClick = firstChild.props.handleClick;
        }
        if (isActive === undefined) {
            isActive = React.Children.toArray(children).some(
                (child) => React.isValidElement<MenuSubItemProps>(child) && child.props.isActive
            );
        }
    }

    return (
        <div className={`group max-[767px]:contents`}>
            <button
                className={`w-full max-[767px]:relative rounded-xl gap-1 md:gap-0 md:hover:bg-slate-200 max-[767px]:max-w-24 flex max-[767px]:flex-col items-center p-3 transition-colors ${
                    isActive && "bg-violet-200 md:hover:bg-violet-300"
                }`}
                onClick={handleMenuItemClick}
            >
                {Icon && <Icon className="size-6 shrink-0" />}
                <span
                    className={`max-[767px]:w-full text-xs md:text-base max-[767px]:text-sm md:opacity-0 md:w-0 transition-opacity overflow-hidden ${
                        isMenuOpen ? "md:visible md:opacity-100 md:w-auto md:pl-4" : "md:invisible"
                    }`}
                >
                    {title}
                </span>
            </button>
            {!isMenuOpen && ( // subItems on hover
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

            {isMenuOpen &&
                isActive &&
                children && ( // subitems on click
                    <div className="max-[767px]:hidden absolute left-0 bg-slate-100 z-10 md:static flex flex-col gap-2 p-2 md:pl-5">
                        {children}
                    </div>
                )}

            {children && ( //subitems on mobile
                <div
                    className={`md:hidden transition-transform ${!isMenuOpen && isActive && "translate-y-0"} ${
                        (!isMenuOpen || !isActive) && "translate-y-full"
                    } ${
                        isActive && "z-10"
                    } max-h-50-vh  absolute bottom-0 left-0 max-[767px]:p-6 max-[767px]:w-full max-[767px]:rounded-t-2xl bg-slate-100 md:static flex flex-col gap-2 md:pl-5 max-[767px]:pb-0 `}
                >
                    <div className={`md:hidden flex justify-between items-center gap-8`}>
                        <span className="font-bold overflow-hidden text-violet-500">{title}</span>
                        <button onClick={() => toggleMenuOpen(false)} aria-label="close">
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
