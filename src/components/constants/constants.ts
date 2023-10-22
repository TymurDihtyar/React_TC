const baseURL = 'https://rickandmortyapi.com/api';
const person = '/character'

const urls = {
    persons:{
        base: person,
        byId: (id:number) => `${baseURL}${person}/${id}`
    }
}

export {baseURL, urls }