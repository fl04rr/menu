import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { ROUTES } from "./constants/routes";
import Page from "./pages/Page";

export const AppRouter = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: ROUTES.HOME, element: <Page title="Main" /> },
            { path: ROUTES.TRENDS, element: <Page title="Trends" /> },
            { path: ROUTES.TASKS, element: <Page title="Tasks" /> },
            { path: ROUTES.TICKETS, element: <Page title="Tickets" /> },
            { path: ROUTES.PAYMENTS, element: <Page title="Payments" /> },
            { path: ROUTES.CLIENT, element: <Page title="Client" /> },
            { path: ROUTES.LIST, element: <Page title="List" /> },
            { path: ROUTES.REVIEWS, element: <Page title="Reviews" /> },
            { path: ROUTES.NOTIFICATIONS, element: <Page title="Notifications" /> },
            { path: ROUTES.INVENTORY, element: <Page title="Inventory" /> },
            { path: ROUTES.PRODUCTS, element: <Page title="Products" /> },
            { path: ROUTES.ORDERS, element: <Page title="Orders" /> },
            { path: ROUTES.SUPPLIERS, element: <Page title="Suppliers" /> },
            { path: ROUTES.SHOP, element: <Page title="Shop" /> },
            { path: ROUTES.REPORTS, element: <Page title="Reports" /> },
            { path: ROUTES.TENDER, element: <Page title="Tender" /> },
            { path: ROUTES.SETTINGS, element: <Page title="Settings" /> },
            { path: ROUTES.KNOWLEDGE, element: <Page title="Knowledge" /> },
        ],
    },
]);
