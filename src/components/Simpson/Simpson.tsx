import React, {FC} from 'react';
import {ISimpson} from "../../Inyerfaces/SimpsonInterface";

interface IProps {
    item: ISimpson
}

const Simpson:FC<IProps> = ({item}) => {
    const {name, surname, age, photo, info }= item;
    return (
        <div>

        </div>
    );
};

export {Simpson};