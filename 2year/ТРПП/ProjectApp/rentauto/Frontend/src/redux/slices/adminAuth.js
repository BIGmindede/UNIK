import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const initialState = {
    authData: {
        token: null,
        status: "loading",
        error: null
    },
    profileData: {
        profile: null,
        status: "loading",
        error: null
    }
}

const adminLoginSlice = createSlice({
    name: "admin_auth",
    initialState,
    reducers: {
        loginStart: (state) => ({
            ...state,
            authData: {
                ...state.authData,
                status: "loading"
            }
        }),
        loginSuccess: (state, action) => {
            return {
                ...state,
                authData: {
                    ...state.authData,
                    token: action.payload.token,
                    status: "loaded"
                }
            }
        },
        loginFailure: (state, action) => ({
            ...state,
            authData: {
                ...state.authData,
                status: "error",
                error: action.payload
            }
        }),
        loadProfileStart: (state) => ({
            ...state,
            profileData: {
                ...state.profileData,
                status: "loading"
            }
        }),
        loadProfileSuccess: (state, action) => ({
            ...state,
            profileData: {
                ...state.profileData,
                profile: action.payload,
                status: "loaded"
            }
        }),
        loadProfileFailure: (state, action) => ({
            ...state,
            profileData: {
                ...state.profileData,
                status: "error",
                error: action.payload
            }
        }),
        logout: () => {
            cookies.remove('token', {path: "/admin" })
            return initialState
        }
    }
})

export const adminAuthSelector = (state) => state.admin_auth.authData
export const adminAuthReducer = adminLoginSlice.reducer
export const { loginStart, loginSuccess, loginFailure, loadProfileStart, loadProfileSuccess, loadProfileFailure, logout } = adminLoginSlice.actions