import React from "react";
import "./OrdersHeader.css";
export default function OrdersHeader() {
  return (
    <div className="orders-header">
      <h2>Orders #34562</h2>
      <div className="orders-filter">
        <button className="active">Dine In</button>
        <button>To Go</button>
        <button>Delivery</button>
      </div>
    </div>
  );
}
