import {axiosService, IRes} from "./axiosService";
import {IPosts} from "../interface/interface";
import {urls} from "../constants/constants";

const postsService = {
    getAll: (): IRes<IPosts[]> => axiosService.get(urls.posts.base),
    getById: (id: number): IRes<IPosts> => axiosService.get(urls.posts.byId(id))
}

export {postsService}