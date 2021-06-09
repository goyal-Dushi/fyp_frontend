import React from 'react'
import { useStateValue } from '../../stateprovider'
import './checkoutproduct.styles.scss';
export default function CheckoutProduct({id,title,price,rating,image}) {
    
const [{basket},dispatch]=useStateValue()
const removeFromBasket=()=>{
    console.log(id);
    dispatch({
        type:'REMOVE_FROM_BASKET',
        id
    })
}
return (
<div className='checkoutproduct'>
    <img className="checkout__image" src={`${image}`} alt="" srcset="" />
    <div className="checkout__infor">
        <div className="checkout__info">
            <p>{title}</p>
        </div>
        <p className="product__price">
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
            {Array(rating).fill().map((_,i)=>(
            <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
    </div>

</div>
)
}