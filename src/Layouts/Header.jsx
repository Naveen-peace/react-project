import {Badge, Container,Nav,Navbar} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiShoppingCart } from 'react-icons/hi'

function Header() {
    const cartItems = useSelector((state) => state.carts)
    return (
            <Navbar bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to='/react-project'>
                        <img src={require('../asset/image/1e0318a04ce644cb89791a9494eb1fb7-removebg-preview.png')} width='80px' alt=""/>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/cart">
                        <HiShoppingCart size={25}/><Badge bg="danger">{cartItems.length}</Badge>
                    </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        
    )
}

export default Header