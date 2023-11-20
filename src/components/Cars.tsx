import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {Car} from "./Car";
import {useEffect} from "react";
import {carActions} from "../redux/slices/carSlice";

const Cars = () => {
    const {cars, triger} = useAppSelector(state => state.cars)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch, triger]);

    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};