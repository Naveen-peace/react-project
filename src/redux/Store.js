import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { productReducer } from "./reducers/ProductReducer"
import { cartReducers } from "./reducers/CartReducer"




const myReducers = combineReducers({
    products: productReducer,
    carts: cartReducers
})

const store = configureStore({
    reducer: myReducers
})

export default store
