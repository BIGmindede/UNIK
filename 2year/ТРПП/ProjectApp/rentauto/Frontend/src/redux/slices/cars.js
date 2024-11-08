import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const token = cookies.get("token")

export const fetchCars = createAsyncThunk("cars/fetchCars", 
async () => {
    const {data} = await axios.get("http://localhost:8088/cars", 
    {headers: {
        "Authorization" : `Bearer ${token}`
    }});
    return data
})

export const fetchAddCar = createAsyncThunk("cars/fetchAddCar", 
async (car) => {
    console.log(token)
    const {data} = await axios.post("http://localhost:8088/cars", car, 
    {headers: {
        "Authorization" : `Bearer ${token}`
    }});
    return data
})

export const fetchEditCar = createAsyncThunk("cars/fetchEditCar",
async (car) => {
    const {data} = await axios.put("http://localhost:8088/cars", car, 
    {headers: {
        "Authorization" : `Bearer ${token}`
    }});
    return data
})

export const fetchRemoveCar = createAsyncThunk("cars/fetchRemoveCar", 
async (id) => {
    await axios.delete(`http://localhost:8088/cars/${id}`, 
    {headers: {
        "Authorization" : `Bearer ${token}`
    }});
})


const carsSlice = createSlice({
    name: "cars",
    initialState: {
        cars: [],
        status: "loading"
    },
    reducers: {},
    extraReducers: {
        //Получаем автомобили с сервера
        [fetchCars.pending]: (state) => {
            state.cars = []
            state.status = "loading"
        },
        [fetchCars.fulfilled]: (state, action) => {
            state.cars = action.payload.sort((a,b) => a.id - b.id);
            state.status = "loaded"
        },
        [fetchCars.rejected]: (state) => {
            state.cars = []
            state.status = "error"
        },

        //Добавляем автомобиль в бд на сервере
        [fetchAddCar.pending]: (state) => {
            state.status = "loading"
        },
        [fetchAddCar.fulfilled]: (state, action) => {
            state.cars = [...state.cars, action.payload]
                .sort((a,b) => a.id - b.id);
            state.status = "loaded"
        },
        [fetchAddCar.rejected]: (state) => {
            state.cars = []
            state.status = "error"
        },

        //Изменяем автомобиль
        [fetchEditCar.pending]: (state) => {
            state.status = "loading"
        },
        [fetchEditCar.fulfilled]: (state, action) => {
            state.cars = 
            [...state.cars
                .filter((car) => car.id !== action.payload.id),
                    action.payload].sort((a,b) => a.id - b.id)
            state.status = "loaded"
        },
        [fetchEditCar.rejected]: (state) => {
            state.cars = []
            state.status = "error"
        },

        //Удаляем автомобиль
        [fetchRemoveCar.pending]: (state) => {
            state.status = "loading"
        },
        [fetchRemoveCar.fulfilled]: (state, action) => {
            state.cars = [...state.cars
                .filter((car) => car.id !== action.meta.arg)]
                    .sort((a,b) => a.id - b.id)
            console.log(action)
            state.status = "loaded"
        },
        [fetchRemoveCar.rejected]: (state) => {
            state.cars = []
            state.status = "error"
        }
    }
});


export const selectCars = (state) => state.cars.cars
export const carsReducer = carsSlice.reducer