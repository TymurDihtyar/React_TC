import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayOut} from "./layouts/MainLayOut";
import {EpisodesPage} from "./pages/EpisodesPage";
import {CharactersPage} from "./pages/CharactersPage";

const router = createBrowserRouter([
    {path:'', element: <MainLayOut/>, children:[
            {index:true, element:<Navigate to={'episodes'}/>},
            {path: 'episodes', element:<EpisodesPage/>},
            {path: 'characters/:ids', element:<CharactersPage/>}
        ]}
])

export {router}