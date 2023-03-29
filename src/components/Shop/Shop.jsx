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
        console.log("products" , products)
        const savedCart = [];
        // * Step 1:
        for (const id in storedCart){
            // * Step 2: Get the product by using id:
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct)
            if(addedProduct){
                // * Step 3: Add quantity:
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // * Step 4: Add the addedProduct to the savedCart:
                savedCart.push(addedProduct)
            }
        }
        // * Step 5: Save the cart:
        setCart(savedCart);
    }, [products])

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