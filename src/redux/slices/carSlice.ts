import {createSlice} from "@reduxjs/toolkit";

interface IState {

}

const initialState: IState = {
    cars: []
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {}
})

const {reducer: carReducer, actions} = carSlice

const carActions = {
    ...actions
}

export {
    carReducer,
    carActions
}