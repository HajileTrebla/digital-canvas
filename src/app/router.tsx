import { createBrowserRouter } from "react-router";

import Home from "../pages/Home"

import Logistics from "../projects/sample-company-1/index";
import LogisticsHome from "../projects/sample-company-1/pages/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/riverside-logistics",
        element: <Logistics />,
        children: [
            {
                index: true,
                element: <LogisticsHome />,
            },
        ],
    },
]);