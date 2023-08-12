import { createSlice } from "@reduxjs/toolkit"


const tempProducts = localStorage.getItem('cart_products')

const cartSlice = createSlice({
    name: 'products',
    initialState: tempProducts === null ? [] : JSON.parse(tempProducts),
    reducers: {
        setCartItems: (state, action) => {

            const data = [...state, { ...action.payload }]

            const stringData = JSON.stringify(data)

            localStorage.setItem('cart_products', stringData)
            return data
        },
        updateCartItems: (state, action) => {

            const data = action.payload

            const stringData = JSON.stringify(data)

            localStorage.setItem('cart_products', stringData)

            return data
        },
        clearCartItems: (state) => {
            localStorage.removeItem('cart_products')
            return []
        }
    }
})

export const { setCartItems, updateCartItems, clearCartItems } = cartSlice.actions

export const cartReducers = cartSlice.reducer