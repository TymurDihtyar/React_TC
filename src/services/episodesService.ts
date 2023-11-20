import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types/resType";
import {IEpisodes} from "../interfaces/episodeInterface";

const episodesService = {
    getAllEpisodes: (): IRes<IEpisodes> => apiService.get(urls.episodes)
}