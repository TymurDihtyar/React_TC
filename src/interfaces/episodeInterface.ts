export interface IEpisodes {
    info: {
        count: number
        pages: number
        next: string
        prev: string
    },
    results: IEpiside[]
}

export interface IEpiside {
    id: number
    name: string
    air_date: string
    episode: string
    characters: string[],
    url: string
    created: string
}