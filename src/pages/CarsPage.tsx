import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {Car} from "../components/Cars/Car";
import {useEffect} from "react";
import {carActions} from "../redux/slices/carSlice";

const CarsPage = () => {
    const {cars} = useAppSelector(state => state.cars)
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll)
    }, [dispatch]);

    return (
        <div>
            {cars.map(item=> <Car key={item.id} item={item}/>)}
        </div>
    );
};

export {CarsPage};