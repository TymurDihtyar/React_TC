import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {Character} from "./Character";

import {episodesAction} from "../redux/slices/episodesSlice";
import {useNavigate} from "react-router-dom";

import css from './Characters.module.css'

const Characters = () => {
    const {characters} = useAppSelector(state => state.characters)
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const back = () => {
        dispatch(episodesAction.setEpisodeName(null));
        navigate(-1);
    }

    return (
        <>
            <button className={css.but} onClick={back}>back</button>
            <div className={css.allCharacters}>
                {characters.map(item => <Character key={item.id} item={item}/>)}
            </div>
        </>
    );
};

export {Characters};