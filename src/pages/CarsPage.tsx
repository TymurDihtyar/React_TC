import {Outlet} from "react-router-dom";
import {useState} from "react";

import {Cars} from "../components/CarContainer/Cars";
import {CarForm} from "../components/CarContainer/CarForm";
import {ICar} from "../interfaces/carInterface";

const CarsPage = () => {
    const [flag, setFlag] = useState<boolean>(null)
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null)
    const trigger = (): void => {
        setFlag(prevState => !prevState)
    }

    return (
        <div>
            <CarForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <div style={{display:'flex',   justifyContent:'space-around'}}>
                <Cars flag={flag} setCarForUpdate={setCarForUpdate} trigger={trigger}/>
                <Outlet/>
            </div>

        </div>
    );
};

export {CarsPage};