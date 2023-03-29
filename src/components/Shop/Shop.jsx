import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);
    useEffect( () => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    const [cart , setCart] = useState([]);

    const handleAddToCart = (product) =>{
        const newCart = [...cart , product];
        setCart(newCart);
        addToDb(product.id)
    }

    useEffect( () => {
        const storedCart = getShoppingCart();
        console.log(storedCart)
    }, [])

    return (
        <div className='shop-container lg:container mx-auto'>
            <div className="product-container mt-20 grid grid-cols-3 gap-10 ">
                {
                    products.map( product => <Product 
                    product = {product} 
                    key ={product.id}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container bg-orange-200 pt-5 p-5">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;