import {apiSepvice} from "./apiSepvice";
import {utls} from "../costants/urls";
import {ICar} from "../interfaces/carInterface";
import {IRes} from "../types/resType";

const carsService = {
    getAll: () => apiSepvice.get(utls.cars),
    create: (data: ICar): IRes<ICar[]> => apiSepvice.post(utls.cars, data),
    update: (id: number, data: ICar): IRes<ICar> => apiSepvice.put(utls.byId(id), data),
    delete: (id: number): IRes<void> => apiSepvice.delete(utls.byId(id))
}
export {carsService}