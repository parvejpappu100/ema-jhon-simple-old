import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart ){
        if(product.quantity  === 0){
            product.quantity = 1;
        }
       totalPrice = totalPrice + product.price * product.quantity;
       totalShipping = totalShipping + product.shipping * product.quantity ;
       console.log(totalShipping)
       quantity = quantity + product.quantity;
    }
    const tax = (totalPrice * 7) / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h3 className='text-3xl text-center'>Order Summary</h3>
            <p className='my-3'>Selected Items : {quantity}</p>
            <p>Total Price : ${totalPrice}</p>
            <p className='my-2'>Total Shipping : ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h6 className='my-2 font-bold text-xl'>Grand Total : ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;