import {configureStore} from "@reduxjs/toolkit";
import {episodesReducer} from "./slices/episodesSlice";

const store = configureStore({
    reducer: {
        episodes: episodesReducer
    }
})

export {store}