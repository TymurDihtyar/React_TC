import {configureStore} from "@reduxjs/toolkit";
import {episodesReducer} from "./slices/episodesSlice";
import {characterReducer} from "./slices/characterSlice";

const store = configureStore({
    reducer: {
        episodes: episodesReducer,
        characters: characterReducer
    }
})

export {store}