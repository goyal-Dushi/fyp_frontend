import React, { useEffect } from 'react'
import { useStateValue } from '../stateprovider'
import './Product.styles.scss'
export default function Product({id,title,price,rating,image}) {
    const [{basket},dispatch]=useStateValue();
    // console.log('Basket item is',basket)
    
    const addToBasket=()=>{
        //dispatch the items into data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
    return (
        <div className='product'>
            <div className="product__info">
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
                <img className="product__image" src={`${image}`} alt="" srcset=""/>
            <button onClick={addToBasket}>Add to Basket</button>
            </div>
    )
}
