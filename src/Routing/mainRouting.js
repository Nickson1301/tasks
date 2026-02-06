import { createBrowserRouter } from "react-router-dom";
import MyImagesComp from "../components/MyImagesComp";
import DashboardComp from "../layout/DashboardComp";
import NavComp from "../layout/NavComp"
import PageNotFoundComp from "../layout/PageNotFoundComp"
import HooksComp from "../ReactHooks/HooksComp";
import UseStateComp from "../ReactHooks/UseStateComp";
import UseEffectComp from "../ReactHooks/UseEffectComp";
import VirtualDomComp from "../components/VirtualDomComp";
import FormValComp from "../components/FormValComp";
import AddProductComp from "../CRUD/AddProductComp";
import UpdateProductComp from "../CRUD/UpdateProductComp";
import ProductDetailsComp from "../CRUD/ProductDetailsComp";

const router = createBrowserRouter([


    {
        path: "", element: <HooksComp />, children: [
            { path: "images", element: <MyImagesComp /> },
            { path: "usestate", element: <UseStateComp /> },
            { path: "useeffect", element: <UseEffectComp /> },
            { path: "virtualdom", element: <VirtualDomComp /> },
            { path: "formval", element: <FormValComp /> },

            {
                path: "productdetail", element: <ProductDetailsComp />, children: [
                    { path: "addproduct", element: <AddProductComp /> },
                    { path: "updateproduct", element: <UpdateProductComp /> },
                ]
            },

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
    { path: "images", element: <MyImagesComp /> },
    { path: "*", element: <PageNotFoundComp /> }

])

export default router;