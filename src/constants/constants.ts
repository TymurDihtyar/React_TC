const baseURL = 'https://api.spacexdata.com/v3';

const launches = '/launches';

const urls = {
    launches: {
        base: launches,
        byId: (id:number)=> `${launches}/${id}`
    }
}
export {baseURL, urls}