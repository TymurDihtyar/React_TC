const baseURL = 'http://owu.linkpc.net/carsAPI/v1'
const cars = '/cars'

const utls = {
    cars,
    byId: (id: number):string => `${cars}/${id}`,
}

export {baseURL, utls}