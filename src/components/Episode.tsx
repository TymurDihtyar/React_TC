import {FC, PropsWithChildren} from 'react';
import {IEpiside} from "../interfaces/episodeInterface";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/reduxHooks";
import {episodesAction} from "../redux/slices/episodesSlice";

import css from './Episode.module.css'

interface IProps extends PropsWithChildren {
    item: IEpiside
}

const Episode: FC<IProps> = ({item}) => {
    const {id, name, episode} = item

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleClick = ()=> {
        const ids = item.characters.map(item=> item.split('/').slice(-1).join()).toString()
        dispatch(episodesAction.setEpisodeName(episode))
        navigate(`/characters/${ids}`)
    }

    return (
        <div className={css.Episode} onClick={handleClick}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>episode: {episode}</div>
        </div>
    );
};

export {Episode};