import Slider from 'react-slick'
import ProductCart from './ProductCart';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RelatedProducts({ products }) {
    var settings = {
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    products.map((product, index) => (
                        <div className='p-2'>
                            <ProductCart product={product} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default RelatedProducts