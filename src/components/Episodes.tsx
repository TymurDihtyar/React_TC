import {useAppSelector} from "../hooks/reduxHooks";
import {Episode} from "./Episode";

import css from './Episodes.module.css'

const Episodes = () => {
    const {episodes} = useAppSelector(state => state.episodes)

    return (
        <div className={css.all}>
            {episodes.map(item=> <Episode key={item.id} item={item}/>)}
        </div>
    );
};

export {Episodes};