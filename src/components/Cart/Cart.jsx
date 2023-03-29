import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)

    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart ){
       totalPrice = totalPrice + product.price;
       totalShipping = totalShipping + product.shipping ;
    }
    const tax = (totalPrice * 7) / 100;

    return (
        <div className='cart'>
            <h3 className='text-3xl text-center'>Order Summary</h3>
            <p className='my-3'>Selected Items : {cart.length}</p>
            <p>Total Price : ${totalPrice}</p>
            <p className='my-2'>Total Shipping : ${totalShipping}</p>
            <p>Tax : ${tax}</p>
            <h6 className='my-2 font-bold text-xl'>Grand Total :</h6>
        </div>
    );
};

export default Cart;