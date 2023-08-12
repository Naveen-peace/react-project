import {Card, Button} from 'react-bootstrap';
import { LuEye } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import CartButton from './CartButton';  


function ProductCart({product }) {

       return (
        <div>
            <Card className='broder-fix'>
                <Card.Img variant="top" src={product.image.thumbnail} className='product-img-flexible' />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Title as="h1">${product.price}</Card.Title>
                    <Card.Text>
                       {product.description.substring(0, 50)}...
                    </Card.Text>
                    <CartButton  product={product}/>
                    <Button as={Link} to={`/product/${product.slug}`} variant="outline-dark" className='ms-3 eye-btn'> <LuEye /> </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCart