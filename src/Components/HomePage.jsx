import { Card } from "react-bootstrap"
import AppApiContext from "../ContextApi/AppApiContext"
import ApiCategories from "../Constant/ApiCategories"
import { useContext, useState } from 'react'

function HomePage() {

    const store = useContext(AppApiContext)

    const [searchTerm, setSearchTerm] = useState('')

    const filteredApiCategories = ApiCategories.filter((product) => {
        return product.toLowerCase().includes(searchTerm.toLowerCase())
    });

    const cardStyle = {
        width: '250px',
        margin: '10px'  
    };

    const handleClick = (product) => {
        store.setApiType(product);
    };

    const handleClearSearch = () => {
        setSearchTerm('')
    };

    return (
        <div className="container ">
            <div className="mt-5 icon">
                <input className="form-control search-icon mr-sm-2" type="text" placeholder="Search API categories" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="btn-6  my-2 my-sm-0" type="button" onClick={handleClearSearch}>Clear Search</button>
            </div>
            <div className="row">
                <div className="cart-adjust">
                    {
                        filteredApiCategories.length > 0 ? filteredApiCategories.map((product, index) => (
                            <div className="px-4 px-lg-4 my-5">
                                <div className={cardStyle}>
                                    <Card>
                                        <Card.Body>
                                            <div className="display-adjust">
                                                <h5>{product.replace('-', ' ')}</h5>
                                                <button className="btn-5" onClick={() => handleClick(product)} key={index}>
                                                    Learn More
                                                </button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        )) : <div>No results found</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage
