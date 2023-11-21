import {useAppSelector} from "../hooks/reduxHooks";

import css from './Header.module.css';
const Header = () => {
    const {episodeName} = useAppSelector(state => state.episodes);

    return (
        <div className={css.Header}>
            <div>{episodeName ? `${episodeName}` : 'Rick & Morty'}</div>
        </div>
    );
};

export {Header};