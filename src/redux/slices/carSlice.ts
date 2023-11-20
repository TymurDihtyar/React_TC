import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces/carInterface";
import {AxiosError} from "axios";
import {carsService} from "../../services/carsService";

interface IState {
    cars: ICar[]
    triger: boolean
    carForUpdate: ICar
}

const initialState: IState = {
    cars: [],
    triger: null,
    carForUpdate: null
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carsService.getAll()
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const create = createAsyncThunk<void, { car: ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            await carsService.create(car)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const update = createAsyncThunk<void, {id:number, car:ICar}>(
    'carSlice/update',
    async ({id, car}, {rejectWithValue})=> {
        try {
            await carsService.update(id, car)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const deleteById = createAsyncThunk<void, {id:number}>(
    'createSlice/deleteById',
    async ({id}, {rejectWithValue})=> {
        try {
            await carsService.delete(id)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(update.fulfilled, state => {
                state.carForUpdate = null
            })
            .addMatcher(isFulfilled(create, update, deleteById), state => {
                state.triger = !state.triger
            })
})

const {reducer: carReducer, actions} = carSlice

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteById
}

export {
    carReducer,
    carActions
}