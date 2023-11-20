const baseURL = 'https://rickandmortyapi.com/api'

const episodes = '/episode'
const characters = '/character'

const urls = {
    episodes,
    characters:{
        characters,
        getById: (ids: string) => `${characters}/${ids}`
    }
}

export {baseURL, urls}