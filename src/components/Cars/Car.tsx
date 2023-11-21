import {FC, PropsWithChildren} from 'react';
import {ICar} from "../../interfaces/carInterface";

interface IProps extends PropsWithChildren {
    item: ICar
}

const Car:FC<IProps> = ({item}) => {
    const {id, brand, price, year} = item
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {Car};