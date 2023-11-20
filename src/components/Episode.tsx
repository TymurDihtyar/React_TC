import {FC, PropsWithChildren} from 'react';
import {IEpiside} from "../interfaces/episodeInterface";

interface IProps extends PropsWithChildren {
    item: IEpiside
}

const Episode: FC<IProps> = ({item}) => {
    const {id, name, episode} = item
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>episode: {episode}</div>
        </div>
    );
};

export {Episode};