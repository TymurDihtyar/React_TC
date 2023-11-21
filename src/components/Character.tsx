import {FC, PropsWithChildren} from 'react';
import {IChar} from "../interfaces/characterInterface";

import css from './Character.module.css'

interface IProps extends PropsWithChildren {
    item: IChar
}

const Character:FC<IProps> = ({item}) => {
        const {id, name, image} = item
    return (
        <div className={css.Character}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};