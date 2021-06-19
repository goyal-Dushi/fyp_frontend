import React from "react";
import { useStateValue } from "../../stateprovider";
import "./checkoutproduct.styles.scss";
export default function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div className='checkoutproduct'>
      <div className='checkoutproduct__imageWrapper'>
        <img className='checkoutproduct__image' src={image} alt='product_img' />
      </div>
      <div className='checkoutInfor'>
        <div className='checkoutInfor__info'>
          <p>{title}</p>
        </div>
        <p className='checkoutInfor__price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutInfor__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role={"img"} aria-label={"star-icon"}>
                ⭐
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}
