import axios from "../axios"

// Get all users
export const getAllUsers = async() => {
    try {
        const response = await axios.get("/users/userdata?limit=5&offset=1")
        const users = response.data.data
        return users
    } catch (error) {
        console.error(error)
        throw new Error('Users could not be fetched')
    }
}

// get a user
export const getUser = async(id) => {
    try {
        const { data } = await axios.get(`auth/users/${id}`)
        const user = data
        return user
    } catch (error) {
        console.error(error)
        throw new Error(' could not be fetched')
    }
}