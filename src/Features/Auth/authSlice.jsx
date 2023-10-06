import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
}

export const registerUser = createAsyncThunk('registeruser', async(body) => {
    const res = await fetch('http://139.162.70.139:8045/auth/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    return await res.json()
})

export const loginUser = createAsyncThunk('registeruser', async(body) => {
    const res = await fetch('http://139.162.70.139:8045/auth/users/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    return await res.json()
})

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem('token')
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem('user')
        },
        logout: (state, action) => {
            state.token = null
            localStorage.clear()
        }
    },
    extraReducers: {
        // Register User
        [registerUser.pending]:(state, action) => {
            state.loading = true
        },
        [registerUser.fulfilled]: (state, {payload: {error, msg}} )=> {
            state.loading = false
            if(error){
                state.error = error
            }else {
                state.msg = msg
            }
        },

        [registerUser.rejected]: (state, action) => {
            state.loading = true
        },

        // Log in User
        [loginUser.pending]:(state, action) => {
            state.loading = true
        },
        [loginUser.fulfilled]: (state, {payload: {error, msg, token, user}} )=> {
            state.loading = false
            if(error){
                state.error = error
            }else {
                state.msg = msg,
                state.token = token,
                state.user = user

                localStorage.setItem('msg', msg)
                localStorage.setItem('user', JSON.stringify)
                localStorage.setItem("token", token)
            }
        },

        [loginUser.rejected]: (state, action) => {
            state.loading = true
        }
    }
})

export const { addToken, addUser, logout } = authSlice.actions

export default authSlice.reducer