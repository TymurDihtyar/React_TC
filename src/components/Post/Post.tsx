import React, {FC} from 'react';

import {IPosts} from "../interface/interface";
import css from './Post.module.css'

interface IProps {
    item: IPosts
    click: (id:number) => Promise<void>
}

const Post:FC<IProps> = ({item, click}) => {
    const {id, title} = item
    return (
        <div className={css.Post}>
            <h3>{id}. {title.toUpperCase()}</h3>
            <button className={css.but} onClick={()=>{click(id)}}>Details</button>
        </div>
    );
};

export {Post};



