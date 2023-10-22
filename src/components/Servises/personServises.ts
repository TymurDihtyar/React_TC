import {axiosServises, IRes} from "./axiosServises";
import {urls} from "../constants/constants";
import {IData, IPerson} from "../interfaces/interfacesPerson";



const personServises = {
    getAll: (): IRes<IData> => axiosServises.get(urls.persons.base),
    getById: (id: number): IRes<IData> => axiosServises.get(urls.persons.byId(id))
}

export {personServises}