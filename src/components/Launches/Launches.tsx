import {useState, useEffect} from "react";

import {ISpace} from "../../interface/interface";
import {launchesService} from "../../service/launchesService";
import {Launch} from "../Launch/Launch";
import css from './Launches.module.css'

const Launches = () => {
    const [launches, setLaunches] = useState<ISpace[]>([]);

    useEffect(() => {
        launchesService.getAll().then(({data}) => {
            const filter = data.filter(element => element.launch_year !== '2020')
            setLaunches(filter)
        })
    }, []);

    return (
        <div className={css.Launches}>
            {launches.map(item=> <Launch key={item.mission_name} item={item}/>)}
        </div>
    );
};

export {Launches};