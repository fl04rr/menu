import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Menu from "./components/Menu/Menu";
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
import { MenuProvider } from "./MenuProvider";
import { useState } from "react";

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    const [currentPath, setCurrentPath] = useState(location.pathname);

    const onChange = (path: string) => {
        setCurrentPath(path);
        navigate(path);
    };

    return (
        <>
            <MenuProvider defaultPath="/" onChange={onChange} currentPath={currentPath}>
                <Menu title="Hello Client">
                    <MenuItem title="Trends" Icon={BsFileBarGraph} link={ROUTES.TRENDS} />
                    <MenuItem title="Tasks" Icon={BsCheckCircle} link={ROUTES.TASKS} />
                    <MenuItem title="Tickets" Icon={BsTicket} link={ROUTES.TICKETS} />
                    <MenuItem title="Payments" Icon={BsWallet2} link={ROUTES.PAYMENTS} />
                    <MenuItem title="Client" Icon={BsEmojiSmile} link={ROUTES.CLIENT}>
                        <MenuSubItem title="List" link={ROUTES.LIST} />
                        <MenuSubItem title="Reviews" link={ROUTES.REVIEWS} />
                        <MenuSubItem
                            title="Notifications Notifications Notifications Notifications"
                            link={ROUTES.NOTIFICATIONS}
                        />
                        <MenuSubItem title="List" link={ROUTES.LIST} />
                        <MenuSubItem title="Reviews" link={ROUTES.REVIEWS} />
                        <MenuSubItem
                            title="Notifications Notifications Notifications Notifications"
                            link={ROUTES.NOTIFICATIONS}
                        />
                        <MenuSubItem title="List" link={ROUTES.LIST} />
                        <MenuSubItem title="Reviews" link={ROUTES.REVIEWS} />
                        <MenuSubItem
                            title="Notifications Notifications Notifications Notifications"
                            link={ROUTES.NOTIFICATIONS}
                        />
                    </MenuItem>
                    <MenuItem
                        title="InventoryVeryLongeName InventoryVeryLongeName InventoryVeryLongeName"
                        Icon={BsArchive}
                        link={ROUTES.INVENTORY}
                    >
                        <MenuSubItem title="Products" link={ROUTES.PRODUCTS} />
                        <MenuSubItem title="Orders" link={ROUTES.ORDERS} />
                        <MenuSubItem title="Suppliers" link={ROUTES.SUPPLIERS} />
                    </MenuItem>
                    <MenuItem title="Shop" Icon={BsShopWindow} link={ROUTES.SHOP} />
                    <MenuItem title="Reports" Icon={BsArchive} link={ROUTES.REPORTS} />
                    <MenuItem title="Tender" Icon={BsFire} link={ROUTES.TENDER} />
                    <MenuItem title="Settings" Icon={BsGear} link={ROUTES.SETTINGS} />
                    <MenuItem title="Knowledge" Icon={BsQuestionCircle} link={ROUTES.KNOWLEDGE} />
                </Menu>
            </MenuProvider>
            <main className="w-full h-full flex justify-center">
                <Outlet />
            </main>
        </>
    );
}

export default App;
