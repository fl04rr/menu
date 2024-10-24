import { Outlet } from "react-router-dom";
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

function App() {
    return (
        <>
            <MenuProvider defaultPath="/">
                <Menu title="Hello Client">
                    <MenuItem title="Trends" icon={<BsFileBarGraph className="size-6" />} link={ROUTES.TRENDS} />
                    <MenuItem title="Tasks" icon={<BsCheckCircle className="size-6" />} link={ROUTES.TASKS} />
                    <MenuItem title="Tickets" icon={<BsTicket className="size-6" />} link={ROUTES.TICKETS} />
                    <MenuItem title="Payments" icon={<BsWallet2 className="size-6" />} link={ROUTES.PAYMENTS} />
                    <MenuItem title="Client" icon={<BsEmojiSmile className="size-6" />} link={ROUTES.CLIENT}>
                        <MenuSubItem title="List" link={ROUTES.LIST} />
                        <MenuSubItem title="Reviews" link={ROUTES.REVIEWS} />
                        <MenuSubItem title="Notifications" link={ROUTES.NOTIFICATIONS} />
                    </MenuItem>
                    <MenuItem title="Inventory" icon={<BsArchive className="size-6" />} link={ROUTES.INVENTORY}>
                        <MenuSubItem title="Products" link={ROUTES.PRODUCTS} />
                        <MenuSubItem title="Orders" link={ROUTES.ORDERS} />
                        <MenuSubItem title="Suppliers" link={ROUTES.SUPPLIERS} />
                    </MenuItem>
                    <MenuItem title="Shop" icon={<BsShopWindow className="size-6" />} link={ROUTES.SHOP} />
                    <MenuItem title="Reports" icon={<BsArchive className="size-6" />} link={ROUTES.REPORTS} />
                    <MenuItem title="Tender" icon={<BsFire className="size-6" />} link={ROUTES.TENDER} />
                    <MenuItem title="Settings" icon={<BsGear className="size-6" />} link={ROUTES.SETTINGS} />
                    <MenuItem
                        title="Knowledge"
                        icon={<BsQuestionCircle className="size-6" />}
                        link={ROUTES.KNOWLEDGE}
                    />
                </Menu>
            </MenuProvider>
            <main className="w-full h-full flex justify-center">
                <Outlet />
            </main>
        </>
    );
}

export default App;
