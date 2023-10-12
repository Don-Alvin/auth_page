import axios from 'axios'

const BASE_URL = 'http://139.162.70.139:8045'

export default axios.create({
    baseURL: BASE_URL 
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})