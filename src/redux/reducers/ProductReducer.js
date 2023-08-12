import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
    },
    reducers: {
        setProducts: (state, action) => {
            return action.payload
        }
    }
})

export const { setProducts } = productSlice.actions

export const productReducer = productSlice.reducer