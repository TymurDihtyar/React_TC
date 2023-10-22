import React, {FC} from 'react';

import {IPerson} from "../interfaces/interfacesPerson";

interface IProps {
    item:IPerson
}

const Person:FC<IProps> = ({item}) => {
    const {id, name, image, gender, status} = item
    return (
        <div>
            
        </div>
    );
};

export {Person};