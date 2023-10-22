import React from 'react';

import {IPerson} from "../interfaces/interfacesPerson";
import {useState, useEffect} from "react";
import {personServises} from "../Servises/personServises";
import {Person} from "../Person/Person";
import './Persons.css'

const Persons = () => {
    const [persons, setPersons] = useState<IPerson[]>([]);

    useEffect(() => {
        personServises.getAll().then(({data}) => setPersons(data.results))
    }, []);

    return (
        <div className={'all'}>
            {persons.map(item => <Person key={item.id} item={item}/>)}
        </div>
    );
};

export {Persons};