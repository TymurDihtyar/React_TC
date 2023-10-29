import {FC} from 'react';

import {ICar} from "../../interfaces/carInterface";
import {ISetState} from "../../types/ISetState";

interface IProps {
    item: ICar
    setCarForUpdate: ISetState<ICar>
}

const Car: FC<IProps> = ({item, setCarForUpdate}) => {
    const {id, brand, price, year} = item

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(item)}>update</button>
            <button>select</button>
            <button>delete</button>
        </div>
    );
};

export {Car};