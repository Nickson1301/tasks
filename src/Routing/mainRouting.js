import { createBrowserRouter } from "react-router-dom";
import MyImagesComp from "../components/MyImagesComp";
import DashboardComp from "../layout/DashboardComp";
import NavComp from "../layout/NavComp"
import PageNotFoundComp from "../layout/PageNotFoundComp"
import HooksComp from "../ReactHooks/HooksComp";
import UseStateComp from "../ReactHooks/UseStateComp";
import UseEffectComp from "../ReactHooks/UseEffectComp";

const router=createBrowserRouter([
   {path:"images",element:<MyImagesComp/>},
   {path:"",element:<DashboardComp/>},
   {path:"navbar/id",element:<NavComp/>},
   {path:"*",element:<PageNotFoundComp/>},
   {path:"hooks",element:<HooksComp/>,children:[
    {path:"usestate",element:<UseStateComp/>},
    {path:"useeffect",element:<UseEffectComp/>}
   ]}
])

export default router;