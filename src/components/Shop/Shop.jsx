import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);
    useEffect( () => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])
    return (
        <div className='shop-container'>
            <div className="products-container mt-12 grid grid-cols-3 gap-10 ">
                {
                    products.map( product => <Product product = {product} key ={product.id}></Product>)
                }
            </div>
            <div className="cart-container bg-orange-200 text-center pt-5 p-2">
                <h3 className='text-3xl'>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;