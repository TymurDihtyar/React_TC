import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";

const MainLayOut = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayOut};