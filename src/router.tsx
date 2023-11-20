import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayOut} from "./layouts/MainLayOut";
import {CarsPage} from "./pages/CarsPage";

const router = createBrowserRouter([
    {path:'', element: <MainLayOut/>, children:[
            {index: true, element:<Navigate to={'cars'}/>},
            {path:'cars', element:<CarsPage/>}
        ]}
])

export {router}