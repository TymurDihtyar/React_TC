const baseURL = 'http://owu.linkpc.net/carsAPI/v2'

const auth = '/auth'
const users = '/users'
const cars = '/cars'

const urls = {
    cars,
    auth:{
        login: auth,
        refresh: `${auth}/refresh`,
        register: users,
        me: `${auth}/me`
    }
}

export {baseURL, urls}