import {FC} from 'react';

import {ISimpson} from "../../interfaces/simpsonInterface";
import "./Simpson.css"

interface IProps {
    item: ISimpson
}

const Simpson: FC<IProps> = ({item}) => {
    const {name, surname, age, photo, info} = item;
    return (
        <div className='member'>
            <h2>{name}, {surname}, {age}</h2>
            <img src={photo} alt={name}/>
            <p>{info}</p>
        </div>
    );
};

export {Simpson};