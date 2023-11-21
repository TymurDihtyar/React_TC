import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IEpiside, IEpisodes} from "../../interfaces/episodeInterface";
import {AxiosError} from "axios";
import {episodesService} from "../../services/episodesService";

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

const getEpisodes = createAsyncThunk<IEpisodes, { page: string }>(
    'episodesSlice/getEpisodes',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await episodesService.getAllEpisodes(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        setEpisodeName: (state, action) => {
            state.episodeName = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getEpisodes.fulfilled, (state, action) => {
                const {info: {next, prev}, results} = action.payload
                state.episodes = results
                state.prevPage = prev
                state.nextPage = next
            })
})

const {reducer: episodesReducer, actions} = episodesSlice

const episodesAction = {
    ...actions,
    getEpisodes
}

export {episodesReducer, episodesAction}