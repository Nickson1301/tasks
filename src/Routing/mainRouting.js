import { createBrowserRouter } from "react-router-dom";
import MyImagesComp from "../components/MyImagesComp";
import DashboardComp from "../layout/DashboardComp";
import NavComp from "../layout/NavComp"
import PageNotFoundComp from "../layout/PageNotFoundComp"
import HooksComp from "../ReactHooks/HooksComp";
import UseStateComp from "../ReactHooks/UseStateComp";
import UseEffectComp from "../ReactHooks/UseEffectComp";
import VirtualDomComp from "../components/VirtualDomComp";

const router = createBrowserRouter([


    {
        path: "hooks", element: <HooksComp />, children: [
            { path: "images", element: <MyImagesComp /> },
            { path: "usestate", element: <UseStateComp /> },
            { path: "useeffect", element: <UseEffectComp /> },
            { path: "virtualdom", element: <VirtualDomComp /> },
        ]
    },
    {
        path: "navbar", element: <NavComp />, children: [
            { path: "images", element: <MyImagesComp /> },
            { path: "usestate", element: <UseStateComp /> },
            { path: "useeffect", element: <UseEffectComp /> },
            { path: "hooks", element: <HooksComp /> },
            { path: "dashboard", element: <DashboardComp /> }
        ]
    },
    { path: "", element: <MyImagesComp /> },
    { path: "*", element: <PageNotFoundComp /> }

])

export default router;