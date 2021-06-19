import React, { useState } from "react";
import { useStateValue } from "../../stateprovider";
import Subtotal from "../subtotal/subtotal.component";
import "./checkout.styles.scss";
import CheckoutProduct from "./checkoutproduct.component";

export default function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Avicii/September/NewVariant/LP/New/LP_PC._SX1500_CB404366283_.jpg'
          alt=''
          className='checkout__ad'
        />
        <h2 className='checkout__title'>
          Hello ,{user?.email} Your Shopping Basket
        </h2>
        <div className='checkout__productsWrapper'>
          {basket.map(({ id, title, image, price, rating }) => {
            return (
              <CheckoutProduct
                id={id}
                title={title}
                rating={rating}
                price={price}
                image={image}
              />
            );
          })}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}
