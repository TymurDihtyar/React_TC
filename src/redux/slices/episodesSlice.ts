import {createSlice} from "@reduxjs/toolkit";
import {IEpiside} from "../../interfaces/episodeInterface";

interface IState {
    episodes: IEpiside[],
    prevPage: string,
    nextPage: string,
    episodeName: string
}

const initialState: IState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    episodeName: null,
}

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {},

})

const {reducer:episodesReducer, actions} = episodesSlice

const episodesAction = {
    ...actions
}

export {episodesReducer, episodesAction}