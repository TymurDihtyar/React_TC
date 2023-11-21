import {IRes} from "../types/resType";
import {IChar} from "../interfaces/characterInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const characterService = {
    getCharacters: (ids:string): IRes<IChar[]> => apiService.get(urls.characters.getByIds(ids))
}

export {characterService}