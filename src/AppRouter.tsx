import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { ROUTES } from "./constants/routes";
import MainPage from "./pages/MainPage";
import Trends from "./pages/Trends";
import Tasks from "./pages/Tasks";
import Tickets from "./pages/Tickets";
import Payments from "./pages/Payments";
import List from "./pages/List";
import Reviews from "./pages/Reviews";
import Notifications from "./pages/Notifications";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Suppliers from "./pages/Suppliers";
import Shop from "./pages/Shop";
import Reports from "./pages/Reports";
import Tender from "./pages/Tender";
import Settings from "./pages/Settings";
import Knowledge from "./pages/Knowledge";
import Inventory from "./pages/Inventory";
import Client from "./pages/Client";

export const AppRouter = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: ROUTES.HOME, element: <MainPage /> },
            { path: ROUTES.TRENDS, element: <Trends /> },
            { path: ROUTES.TASKS, element: <Tasks /> },
            { path: ROUTES.TICKETS, element: <Tickets /> },
            { path: ROUTES.PAYMENTS, element: <Payments /> },
            { path: ROUTES.CLIENT, element: <Client /> },
            { path: ROUTES.LIST, element: <List /> },
            { path: ROUTES.REVIEWS, element: <Reviews /> },
            { path: ROUTES.NOTIFICATIONS, element: <Notifications /> },
            { path: ROUTES.INVENTORY, element: <Inventory /> },
            { path: ROUTES.PRODUCTS, element: <Products /> },
            { path: ROUTES.ORDERS, element: <Orders /> },
            { path: ROUTES.SUPPLIERS, element: <Suppliers /> },
            { path: ROUTES.SHOP, element: <Shop /> },
            { path: ROUTES.REPORTS, element: <Reports /> },
            { path: ROUTES.TENDER, element: <Tender /> },
            { path: ROUTES.SETTINGS, element: <Settings /> },
            { path: ROUTES.KNOWLEDGE, element: <Knowledge /> },
        ],
    },
]);
