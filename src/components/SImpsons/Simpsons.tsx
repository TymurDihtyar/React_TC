import React from 'react';

import {simpsons} from "../constants/items";
import {Simpson} from "../Simpson/Simpson";
import {ISimpson} from "../../Inyerfaces/SimpsonInterface";
import "./Simpsons.css"


const Simpsons = () => {
    return (
        <div className={'all'}>
            {simpsons.map((item: ISimpson, index: number) => <Simpson key={index} item={item}/>)}
        </div>
    );
};

export {Simpsons};