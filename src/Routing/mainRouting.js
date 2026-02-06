import { createBrowserRouter } from "react-router-dom";
import MyImagesComp from '../components/MyImagesComp'
import HooksComp from "../ReactHooks/HooksComp";
import UseStateComp from "../ReactHooks/UseStateComp";
import DashboardComp from '../layout/DashboardComp'
import PageNotFoundComp from '../layout/PageNotFoundComp'
import ClassComp from '../components/ClassComp'
import FormValComp from "../components/FormValComp";
import AddProductComp from '../CRUD/AddProductComp'
import UpdateProductComp from '../CRUD/UpdateProductComp'
import ProductDetailsComp from '../CRUD/ProductDetailsComp'
import VirtualDomComp  from '../components/VirtualDomComp'
import DataListComp from "../layout/DataListComp";



const router = createBrowserRouter([
    {
        path: "dashboard", element: <DashboardComp />, children: [
            
            //2.naming routing
            { path: "images", element: <MyImagesComp /> },
            
            {path:"formval",element:<FormValComp/>},
            {path:"addproducts",element:<AddProductComp/>},
            {path:"updateproducts/:id",element:<UpdateProductComp/>},
            {path:"productdetails",element:<ProductDetailsComp/>},
            {path:"datalist",element:<DataListComp/>},
            {
                path: "hooks", element: <HooksComp />, children: [
                    { path: "usestate", element: <UseStateComp /> }
                ]
            },
            {path:"virtualdom",element:<VirtualDomComp/>},
        ]
    },
    //1.default routing
    { path: "", element: <ClassComp/> },
    //5.wild card routing
    { path: "*", element: <PageNotFoundComp /> }
])

export default router