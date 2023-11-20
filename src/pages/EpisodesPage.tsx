import {useAppDispatch} from "../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {episodesAction} from "../redux/slices/episodesSlice";
import {Episodes} from "../components/Episodes";
import {Pagination} from "../components/Pagination";

const EpisodesPage = () => {
    const dispatch = useAppDispatch()
    const [query, setQuery] = useSearchParams({page:'1'})
    const page = query.get('page')

    useEffect(() => {
        dispatch(episodesAction.getEpisodes({page}))
    }, [dispatch, page]);

    return (
        <div>
            <Episodes/>
            <Pagination setQuery={setQuery}/>
        </div>
    );
};

export {EpisodesPage};