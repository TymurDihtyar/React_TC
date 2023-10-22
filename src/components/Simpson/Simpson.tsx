import React, {FC} from 'react';
import {ISimpson} from "../../Inyerfaces/SimpsonInterface";

interface IProps {
    item: ISimpson
}

const Simpson:FC<IProps> = ({item}) => {
    const {name, surname, age, photo, info }= item;
    return (
        <div>
            <h2>{name}, {surname}, {age}</h2>
            <img src={photo} alt={name}/>
            <p>{info}</p>
        </div>
    );
};

export {Simpson};