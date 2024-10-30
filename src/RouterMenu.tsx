import { useLocation, useNavigate } from "react-router-dom";
import MenuItem from "./components/MenuItem/MenuItem";
import MenuSubItem from "./components/MenuSubItem/MenuSubItem";
import { ROUTES } from "./constants/routes";
import {
    BsArchive,
    BsCheckCircle,
    BsEmojiSmile,
    BsFileBarGraph,
    BsFire,
    BsGear,
    BsQuestionCircle,
    BsShopWindow,
    BsTicket,
    BsWallet2,
} from "react-icons/bs";

export default function RouterMenu() {
    const navigate = useNavigate();
    const pathname = useLocation().pathname;

    const handleItemClick = (link: string) => {
        navigate(link);
    };

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <>
            <MenuItem
                title="Trends"
                isActive={isActive(ROUTES.TRENDS)}
                Icon={BsFileBarGraph}
                handleClick={() => handleItemClick(ROUTES.TRENDS)}
            />
            <MenuItem
                title="Tasks"
                Icon={BsCheckCircle}
                handleClick={() => handleItemClick(ROUTES.TASKS)}
                isActive={isActive(ROUTES.TASKS)}
            />
            <MenuItem
                title="Tickets"
                Icon={BsTicket}
                handleClick={() => handleItemClick(ROUTES.TICKETS)}
                isActive={isActive(ROUTES.TICKETS)}
            />
            <MenuItem
                title="Payments"
                Icon={BsWallet2}
                handleClick={() => handleItemClick(ROUTES.PAYMENTS)}
                isActive={isActive(ROUTES.PAYMENTS)}
            />
            <MenuItem title="Client" Icon={BsEmojiSmile}>
                <MenuSubItem
                    title="List"
                    handleClick={() => handleItemClick(ROUTES.LIST)}
                    isActive={isActive(ROUTES.LIST)}
                />
                <MenuSubItem
                    title="Reviews"
                    handleClick={() => handleItemClick(ROUTES.REVIEWS)}
                    isActive={isActive(ROUTES.REVIEWS)}
                />
                <MenuSubItem
                    title="Notifications"
                    handleClick={() => handleItemClick(ROUTES.NOTIFICATIONS)}
                    isActive={isActive(ROUTES.NOTIFICATIONS)}
                />
            </MenuItem>

            <MenuItem title="Inventory" Icon={BsArchive}>
                <MenuSubItem
                    title="Products"
                    handleClick={() => handleItemClick(ROUTES.PRODUCTS)}
                    isActive={isActive(ROUTES.PRODUCTS)}
                />
                <MenuSubItem
                    title="Orders"
                    handleClick={() => handleItemClick(ROUTES.ORDERS)}
                    isActive={isActive(ROUTES.ORDERS)}
                />
                <MenuSubItem
                    title="Suppliers"
                    handleClick={() => handleItemClick(ROUTES.SUPPLIERS)}
                    isActive={isActive(ROUTES.SUPPLIERS)}
                />
            </MenuItem>
            <MenuItem
                title="Shop"
                Icon={BsShopWindow}
                handleClick={() => handleItemClick(ROUTES.SHOP)}
                isActive={isActive(ROUTES.SHOP)}
            />
            <MenuItem
                title="Reports"
                Icon={BsArchive}
                handleClick={() => handleItemClick(ROUTES.REPORTS)}
                isActive={isActive(ROUTES.REPORTS)}
            />
            <MenuItem
                title="Tender"
                Icon={BsFire}
                handleClick={() => handleItemClick(ROUTES.TENDER)}
                isActive={isActive(ROUTES.TENDER)}
            />
            <MenuItem
                title="Settings"
                Icon={BsGear}
                handleClick={() => handleItemClick(ROUTES.SETTINGS)}
                isActive={isActive(ROUTES.SETTINGS)}
            />
            <MenuItem
                title="Knowledge"
                Icon={BsQuestionCircle}
                handleClick={() => handleItemClick(ROUTES.KNOWLEDGE)}
                isActive={isActive(ROUTES.KNOWLEDGE)}
            />
        </>
    );
}
