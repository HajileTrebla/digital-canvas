import { Outlet } from "react-router";

import GlobalNavbar from "../../components/GlobalNavbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
    return (
        <div>
            <GlobalNavbar />
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
