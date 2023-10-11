import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = 'http://139.162.70.139:8045/auth/users';

const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: null,
};

const fetchData = async (endpoint, body) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    return await response.json();
};

export const registerUser = createAsyncThunk('registerUser', async (body) => {
    return fetchData('/', body);
});

export const loginUser = createAsyncThunk('loginUser', async (body) => {
    return fetchData('/login', body);
});

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem('token');
        },
        addUser: (state, action) => {
            state.user = localStorage.getItem('user');
        },
        logout: (state, action) => {
            state.token = null;
            localStorage.clear();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, { payload: { error, msg } }) => {
                state.loading = false;
                if (error) {
                    state.error = error;
                } else {
                    state.msg = msg;
                }
            })
            .addCase(registerUser.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to register.";
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload: { error, access_token, user } }) => {
                state.loading = false;
                if (error) {
                    state.error = error;
                } else {
                    state.msg = user.msg;
                    state.token = access_token;
                    state.user = user;

                    localStorage.setItem('msg', user.msg);
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem("token", access_token);
                }
            })
            .addCase(loginUser.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to login.";
            });
    }
});

export const { addToken, addUser, logout } = authSlice.actions;

export default authSlice.reducer;
