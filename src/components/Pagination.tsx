import {FC, PropsWithChildren} from 'react';
import {SetURLSearchParams} from "react-router-dom";
import {useAppSelector} from "../hooks/reduxHooks";

interface IProps extends PropsWithChildren {
    setQuery: SetURLSearchParams
}

const Pagination: FC<IProps> = ({setQuery}) => {
    const {nextPage, prevPage} = useAppSelector(state => state.episodes)

    const prev = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') - 1}`)
            return prev
        })
    }
    const next = () => {
        setQuery(prev => {
            prev.set('page', `${+prev.get('page') + 1}`)
            return prev
        })
    }

    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>prev</button>
            <button disabled={!nextPage} onClick={next}>next</button>
        </div>
    );
};

export {Pagination};