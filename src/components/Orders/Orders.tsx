import "./Orders.css";
import OrdersHeader from "./components/OrdersHeader/OrdersHeader";
import Items from "./components/Items/Items";

export default function Orders(props: { orders: any }) {
  const subTotal = () => {
    let subtotal = 0;
    props.orders.map((e: any) => {
      subtotal += e.price * e.quantity;
    });
    return subtotal.toFixed(2);
  };
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
        <div className="order-footer">
          <div className="order-footer-line"></div>
          <div className="con">
            <p>Discount</p>
            <h4>$0</h4>
          </div>
          <div className="con">
            <p>Sub Total</p>
            <h4>${subTotal()}</h4>
          </div>
          <button>Continue to Payment</button>
        </div>
      </div>
    </div>
  );
}
