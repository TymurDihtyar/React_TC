import {FC, PropsWithChildren} from 'react';
import {ICar} from "../interfaces/carInterface";
import {useAppDispatch} from "../hooks/reduxHooks";
import {carActions} from "../redux/slices/carSlice";

interface IProps extends PropsWithChildren {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car
    const dispatch = useAppDispatch()
    const handler = (car: ICar) => {
        dispatch(carActions.setCarForUpdate({car}))
    }
    const del = async (id:number) => {
        await dispatch(carActions.deleteById({id}))
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => handler(car)}>update</button>
            <button onClick={() => del(id)}>delete</button>
        </div>
    );
};

export {Car};