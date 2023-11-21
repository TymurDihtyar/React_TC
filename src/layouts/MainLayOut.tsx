import {Outlet} from "react-router-dom";
import {Header} from "../components/Header";

const MainLayOut = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayOut};