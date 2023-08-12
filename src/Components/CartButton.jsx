import React from 'react'
import { Button } from 'react-bootstrap'
import { LuShoppingCart } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setCartItems } from '../redux/reducers/CartReducer'

function CartButton({ product }) {
    const dispatch = useDispatch()
    const cartProducts = useSelector((state) => state.carts)

    const CheckInCart = (carts) => {
        if (carts.length === 0) {
            return true;
        } else {
            var temp = carts.filter(item => item.id === product.id)
            console.log(temp)
            return temp.length === 0 ? true : false;
        }
    }

    const addToCart = (data) => {
        if (CheckInCart(cartProducts)) {
            dispatch(setCartItems(data))
            toast.success('Product Added to cart')
        } else {

            toast.error('Product Already in cart!')
            console.log('done')

        }
    }
    return (
        <Button variant="dark" onClick={() => addToCart(product)}> <LuShoppingCart /> Add to cart</Button>
    )
}

export default CartButton