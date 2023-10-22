import React, {FC} from 'react';

import {IPerson} from "../interfaces/interfacesPerson";

interface IProps {
    item:IPerson
}

const Person:FC<IProps> = ({item}) => {
    const {id, name, image, gender, status, species} = item
    return (
        <div>
            <h2>ID:{id} {name}</h2>
            <img src={image} alt={name}/>
            <p>Status: {status} Gender: {gender} Species: {species}</p>
        </div>
    );
};

export {Person};