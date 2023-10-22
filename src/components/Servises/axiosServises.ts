import {baseURL} from "../constants/constants";
import axios, {AxiosResponse} from "axios";


export type IRes<T> = Promise<AxiosResponse<T>>

const axiosServises = axios.create({baseURL});

export {axiosServises}