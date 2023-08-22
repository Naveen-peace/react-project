
import React from 'react'
import { Button, Form, InputGroup, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillTrash3Fill, BsFillCartCheckFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { clearCartItems, updateCartItems } from '../redux/reducers/CartReducer'
import { useEffect } from 'react'


function Cart() {

    const cartItems = useSelector((state) => state.carts)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [Total, setTotal] = useState(0)
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        address: '',
    });

    const removeCartItem = (cartItem) => {
        const temparray = cartItems.filter(item => item.id !== cartItem.id)
        dispatch(updateCartItems(temparray))
    }

    const checkoutProduct = () => {
        dispatch(clearCartItems())
        navigate('/thank-you')
    }

    useEffect(() => {
        if (cartItems.length !== 0) {
            var tempAmount = 0
            cartItems.forEach(item => {
                tempAmount += item.price
            })
            setTotal(tempAmount)
        }
    })

    if (cartItems.length === 0) {
        return (
            <div className='container p-5 text-center text-dark my-5'>
                <img src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png" alt="" width="140px" />
                <h5 className='my-2'>Your Cart is Empty!</h5>
                <Link className="btn btn-primary" to="/react-project"> Shop now</Link>
            </div>
        )
    }
    return (
        <div className='container p-5'>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={item.image.thumbnail} alt="" width="70px" />
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <td width="130px">
                                    <InputGroup>
                                        <Button variant='light' className='border'>-</Button>
                                        <Form.Control type="number" value="1" className='text-center' />
                                        <Button variant='light' className='border'>+</Button>
                                    </InputGroup>
                                </td>
                                <td className='text-center'>
                                    <Button variant='danger' onClick={() => removeCartItem(item)}>
                                        <BsFillTrash3Fill />
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <div className="text-end">
                <span>Total : </span> <b>Rs.{Total}</b>
            </div>
            <div className="my-4 text-align-on">
                <h5>Customer Information</h5>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={customer.name}
                        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={customer.email}
                        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter address"
                        value={customer.address}
                        onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                    />
                </Form.Group>
            </div>

            <Button variant='success' size='lg' onClick={checkoutProduct}> <BsFillCartCheckFill /> Checkout</Button>
        </div >
    )
}

export default Cart