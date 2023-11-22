import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces/userInterfase";
import {IAuth} from "../../interfaces/authInterface";
import {authService} from "../../services/authService";
import {AxiosError} from "axios";

interface IState {
    me: IUser
    errors: boolean
}

let initialState: IState = {
    me: null,
    errors: null
}

const login = createAsyncThunk<IUser, { user: IAuth }>(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            return await authService.login(user)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const me = createAsyncThunk<IUser, void>(
    'authSlice/me',
    async (_, {rejectWithValue})=> {
        try {
            const {data} = await authService.me()
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.me = action.payload
            })
            .addCase(me.fulfilled, (state, action) => {
                state.me = action.payload
            })
            .addMatcher(isRejected(login), state => {
                state.errors = true
            })
            .addMatcher(isFulfilled(login), state => {
                state.errors = false
            })
})

const {reducer: authReducer, actions} = authSlice

const authActions = {
    ...actions,
    login,
    me
}

export {authReducer, authActions}

