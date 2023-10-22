import React, {FC} from 'react';

import {ISpace} from "../../interface/interface";
import css from './Launch.module.css'

interface IProps {
    item: ISpace
}

const Launch:FC<IProps> = ({item}) => {
    const {mission_name, launch_year, links:{mission_patch_small}} = item;
    return (
        <div className={css.Launch}>
            <h3>Mission: <br/>{mission_name}</h3>
            <p>Launch: {launch_year}</p>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};