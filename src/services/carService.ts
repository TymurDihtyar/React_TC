import {IRes} from "../types/resType";
import {ICar} from "../interfaces/carInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IPagination} from "../interfaces/paginationInterface";

const carService = {
    getAll: (): IRes<IPagination<ICar>> => apiService.get(urls.cars),
    create: (data: ICar): IRes<ICar> => apiService.post(urls.cars, data)
}

export {carService}