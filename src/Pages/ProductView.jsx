import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductViewLoader from '../Components/productViewLoader'
import CartButton from '../Components/CartButton'
import RelatedProducts from '../Components/RelatedProducts'

function ProductView() {
    const { slug } = useParams()

    const [product, setProduct] = useState(null)
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        axios.get(`https://mock.redq.io/api/products/${slug}`).then((Response) => {
            window.scroll(0, 0)
            setProduct(Response.data)
            setLoader(false)
        })
    }, [slug])


    if (product === null || loader) {
        return (<ProductViewLoader />)
    }

    return (
        <section >
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={product.image.original} alt="..." /></div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: {product.sku}</div>
                        <h1 className="display-5 fw-bolder">{product.name}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through me-2">${product.price}</span>
                            <span>${product.sale_price}</span>
                        </div>
                        <p className="lead">{product.description}</p>
                        <CartButton product={product} />
                    </div>
                </div>
                <RelatedProducts products={product.related_products} />

            </div >
        </section >
    )
}

export default ProductView