import {Characters} from "../components/Characters";
import {useAppDispatch} from "../hooks/reduxHooks";
import {useEffect} from "react";
import {charActions} from "../redux/slices/characterSlice";
import {useParams} from "react-router-dom";

const CharactersPage = () => {
    const dispatch = useAppDispatch()
    const {ids} = useParams()

    useEffect(() => {
        dispatch(charActions.getCharacters({ids}))
    }, [dispatch, ids]);

    return (
        <div>
            <Characters/>
        </div>
    );
};

export {CharactersPage};