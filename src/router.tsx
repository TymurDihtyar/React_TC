import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayOut} from "./layouts/MainLayOut";
import {CarsPage} from "./pages/CarsPage";
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";
import {RequiredAuth} from "./hoc/RequiredAuth";

const router = createBrowserRouter([
    {path:'', element:<MainLayOut/>, children:[
            {index:true, element: <Navigate to={'cars'}/>},
            {path:'cars', element:<RequiredAuth><CarsPage/></RequiredAuth>},
            {path:'login', element:<LoginPage/>},
            {path:'register', element:<RegisterPage/>},
        ]}
])

export {router}