import React from "react";
import "./subtotal.styles.scss";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../stateprovider";
import { getBasketTotal } from "../../reducer";
import { Link, useHistory } from "react-router-dom";
export default function Subtotal({ value }) {
  const history = useHistory();

  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' name='' id='' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}
