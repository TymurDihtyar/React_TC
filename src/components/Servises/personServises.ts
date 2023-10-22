import {axiosServises, IRes} from "./axiosServises";
import {urls} from "../constants/constants";
import {IPerson} from "../interfaces/interfacesPerson";

const personServises = {
    getAll: (): IRes<IPerson[]> => axiosServises.get(urls.persons.base),
    getById: (id: number): IRes<IPerson> => axiosServises.get(urls.persons.byId(id))
}

export {personServises}