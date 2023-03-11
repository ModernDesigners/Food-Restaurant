import React from "react";
import Product from "../../../../images/products/Product1.png";
import DeleteIcon from "../../../../images/icons/Delete.png";
interface ItemInterface {
  title: string;
  price: number;
  quantity: number;
}
export default function Item({ title, price, quantity }: ItemInterface) {
  return (
    <div className="item">
      <div className="item-topside-info">
        <div className="item-image">
          <img src={Product} width="40px" alt="" />
          <div>
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
        </div>
        <div className="item-moreinfo">
          <div className="quantity">
            <h3>{quantity}</h3>
          </div>
          <h4>${price * quantity}</h4>
        </div>
      </div>
      <div className="item-bottomside-info">
        <div className="item-message">
          <input
            type="text"
            placeholder="Please, just a little bit spicy only."
          />
        </div>
        <div className="delete-item">
          <img src={DeleteIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
