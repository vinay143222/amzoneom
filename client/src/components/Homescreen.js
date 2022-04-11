import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
import '../index.css';
function Homescreen() {
    return (
        <div>
            <h1>Featured Products</h1>
                <div className='products'>
                {
                    data.products.map((product) => <div key={product.slug} className="product">
                       <Link to={`/product/${product.slug}`}>
                        <img src={product.image} alt={product.name} />
                        </Link>
                        <div className="product-info">
                            <Link to={`/product${product.name}`}>
                        <p>{product.name}</p>
                        </Link>
                        <p>{product.price}</p>
                        <button>Add to cart</button>
                        </div>

                    </div>)
                }
                </div>
        </div>
    )
}

export default Homescreen
