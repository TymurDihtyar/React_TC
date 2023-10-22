import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants/constants";
import {IData} from "../interfaces/interfacesPerson";


const personService = {
    getAll: (): IRes<IData> => axiosService.get(urls.persons.base),
    getById: (id: number): IRes<IData> => axiosService.get(urls.persons.byId(id))
}

export {personService}