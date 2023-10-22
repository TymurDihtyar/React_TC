import React, {FC} from 'react';
import {IPosts} from "../interface/interface";

interface IProps {
    item:IPosts
}

const Post:FC<IProps> = ({item}) => {
    const {id, title} = item
    return (
        <div>
            {}
        </div>
    );
};

export {Post};



