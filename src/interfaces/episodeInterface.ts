export interface IEpisodes {
    info: {
        count: number
        pages: number
        next: string | null
        prev: string | null
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