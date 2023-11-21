import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IChar} from "../../interfaces/characterInterface";
import {characterService} from "../../services/characterService";
import {AxiosError} from "axios";

interface IState {
    characters: IChar[]
}

const initialState: IState = {
    characters: []
}

const getCharacters = createAsyncThunk<IChar[], {ids:string}>(
    'characterSlice/getCharacters',
    async ({ids}, {rejectWithValue})=> {
        try {
            const {data} = await characterService.getCharacters(ids)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.characters = action.payload
            })
})

const {reducer: characterReducer, actions} = characterSlice

const charActions = {
    ...actions,
    getCharacters
}

export {characterReducer, charActions}