import {useState, useEffect} from "react";

import {IPerson} from "../../interfaces/interfacesPerson";
import {personService} from "../../servises/personService";
import {Person} from "../Person/Person";
import './Persons.css'

const Persons = () => {
    const [persons, setPersons] = useState<IPerson[]>([]);

    useEffect(() => {
        personService.getAll().then(({data}) => setPersons(data.results))
    }, []);

    return (
        <div className={'all'}>
            {persons.map(item => <Person key={item.id} item={item}/>)}
        </div>
    );
};

export {Persons};