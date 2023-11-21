import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/auttSlice";
import {carReduser} from "./slices/carSlice";

const store = configureStore({
    reducer:{
        auth: authReducer,
        cars: carReduser
    }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export {store}
export type {
    AppDispatch,
    RootState
}