import axios from "axios";
import store from '../redux/store'
import Cookies from 'universal-cookie'
import { createAsyncThunk } from "@reduxjs/toolkit";
import jwt from 'jwt-decode'
import { loginFailure, loginStart, loginSuccess } from "../redux/slices/adminAuth";

const cookies = new Cookies()

export const authAdmin = createAsyncThunk("admin_login/auth",
    async (info) => {
        const dispatch = store.dispatch
        try {
            dispatch(loginStart())
            const {data} = await axios.post("http://localhost:8088/authenticate", info)
            const decoded = jwt(data.token)
            cookies.set('token', data.token, { path: '/admin', expires: new Date(Date.now() + 1000 * decoded.exp)})
            dispatch(loginSuccess(data))
        } catch (e) {
            console.log(e.message)
            dispatch(loginFailure(e.message))
        }
    }
)

export const regAdmin = createAsyncThunk("admin_reg/auth",
    async (info) => {
        const dispatch = store.dispatch
        try {
            dispatch(loginStart())
            const {data} = await axios.post("http://localhost:8088/register", info)
            const decoded = jwt(data.token)
            cookies.set('token', data.token, { path: '/admin', expires: new Date(Date.now() + 1000 * decoded.exp)})
            console.log(decoded)
            dispatch(loginSuccess(data))
        } catch (e) {
            console.log(e.message)
            dispatch(loginFailure(e.message))
        }
    }
)