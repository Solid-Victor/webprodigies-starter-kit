import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
    isAuthenticated: boolean
    user: any | null
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.isAuthenticated = true
            state.user = action.payload
        },
        clearUser: (state) => {
            state.isAuthenticated = false
            state.user = null
        },
    },
})

export const { setUser, clearUser } = authSlice.actions
export default authSlice.reducer 