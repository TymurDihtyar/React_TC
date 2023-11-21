import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayOut} from "./layouts/MainLayOut";
import {CarsPage} from "./pages/CarsPage";
import {RegisterPage} from "./pages/RegisterPage";
import {LoginPage} from "./pages/LoginPage";

const router = createBrowserRouter([
    {path:'', element:<MainLayOut/>, children:[
            {index:true, element: <Navigate to={'cars'}/>},
            {path:'cars', element:<CarsPage/>},
            {path:'login', element:<LoginPage/>},
            {path:'register', element:<RegisterPage/>},
        ]}
])

export {router}