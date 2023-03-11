import React from "react";
import "./Orders.css";
import OrdersHeader from "./components/OrdersHeader/OrdersHeader";
import Items from "./components/Items/Items";

export default function Orders() {
  

  return (
    <div className="orders">
      <OrdersHeader />
      <div className="orders-main">
        <div className="item-line-info">
          <div>
            <h3>Item</h3>
          </div>
          <div>
            <h3>Qty</h3>
            <h3>Price</h3>
          </div>
        </div>
        <Items />
      </div>
    </div>
  );
}
