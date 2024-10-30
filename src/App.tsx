import { Outlet } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { MenuProvider } from "./MenuProvider";
import RouterMenu from "./RouterMenu";

function App() {
    return (
        <>
            <MenuProvider>
                <Menu>
                    <RouterMenu />
                </Menu>
            </MenuProvider>
            <main className="w-full h-full flex justify-center">
                <Outlet />
            </main>
        </>
    );
}

export default App;
