import { useContext } from "react";

import "./Items.css";

import { ItemsProvider } from "../../../../main/App";
import Item from "./Item";
export default function Items() {
  const ItemsContext = useContext<any>(ItemsProvider);

  return (
    <div className="items">
      {ItemsContext.orderItems.map((e: any, i: number) => (
        <Item
          key={i}
          id={e.id}
          title={e.title}
          quantity={e.quantity}
          price={e.price.toFixed(2)}
          image={e.image}
        />
      ))}
    </div>
  );
}
