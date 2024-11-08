import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    model: "",
    category: "",
    cost: ""
}

const carDetailsSlice = createSlice({
    name: "car_details",
    initialState,
    reducers: {
        setCarDetails: (state, action) => {
            state = action.payload
        }
    }
});

export const carDetailsReducer = carDetailsSlice.reducer
export const selectCarDetails = (state) => state.car_details
export const {setCarDetails} = carDetailsSlice.actions 