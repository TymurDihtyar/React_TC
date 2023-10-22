import React, {FC} from 'react';

import {IPosts} from "../interface/interface";
import css from './PostDetail.module.css'

interface IProps {
    detail: IPosts
}

const PostDetail:FC<IProps> = ({detail}) => {
    const {id, title, body} = detail
    return (
        <div className={css.PostDetail}>
            <h2>{id}. {title.toUpperCase()}</h2>
            <p>{body}</p>
        </div>
    );
};

export {PostDetail};