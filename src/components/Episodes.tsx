import {useAppSelector} from "../hooks/reduxHooks";
import {Episode} from "./Episode";

const Episodes = () => {
    const {episodes} = useAppSelector(state => state.episodes)

    return (
        <div>
            {episodes.map(item=> <Episode key={item.id} item={item}/>)}
        </div>
    );
};

export {Episodes};