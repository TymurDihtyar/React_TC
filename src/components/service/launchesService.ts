import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants/constants";
import {ISpace} from "../../interface/interface";

const launchesService = {
    getAll: ():IRes<ISpace[]> => axiosService.get(urls.launches.base),
    getById: (id:number):IRes<ISpace> => axiosService.get(urls.launches.byId(id))
}
export {launchesService}