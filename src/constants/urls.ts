const baseURL = 'https://rickandmortyapi.com/api'

const episodes = '/episode'
const characters = '/character'

const urls = {
    episodes,
    characters:{
        characters,
        getByIds: (ids: string) => `${characters}/${ids}`
    }
}

export {baseURL, urls}