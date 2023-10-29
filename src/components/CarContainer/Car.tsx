import {FC} from 'react';

import {ICar} from "../../interfaces/carInterface";
import {ISetState} from "../../types/ISetState";
import {carService} from "../../services/carService";
import {useNavigate} from "react-router-dom";

interface IProps {
    item: ICar
    setCarForUpdate: ISetState<ICar>
    trigger: () => void
}

const Car: FC<IProps> = ({item, setCarForUpdate, trigger}) => {
    const {id, brand, price, year} = item

    const del = async (id: number) => {
        await carService.delete(id)
        trigger()
    }

    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(item)}>update</button>
            <button onClick={() => navigate('select', {state: {item}})}>select</button>
            <button onClick={() => del(id)}>delete</button>
        </div>
    );
};

export {Car};