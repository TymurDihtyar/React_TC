import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IRes} from "../types/IRes";
import {ICar} from "../interfaces/carInterface";

const carService = {
    getAll:():IRes<ICar[]> => axiosService.get(urls.cars.base),
    create: (data:ICar):IRes<ICar> => axiosService.post(urls.cars.base, data),
    updateById: (data:ICar, id:number): IRes<ICar> => axiosService.put(urls.cars.byId(id), data),
    delete: (id:number):IRes<void> => axiosService.delete(urls.cars.byId(id))
}

export {carService}