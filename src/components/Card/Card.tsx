import { useContext } from "react";
import ProductImage from "../../images/products/Product1.png";
import { ItemsProvider } from "../../main/App";
import "./Card.css";
interface cardInterface {
  id: number;
  title: string;
  price: number;
  aviableBowls: number;
  quantity: number;
}

export default function Card({
  title,
  price,
  aviableBowls,
  id,
  quantity,
}: cardInterface) {
  const ItemsContext = useContext<any>(ItemsProvider);
  const addToOrders = () => {
    if (ItemsContext.orderItems?.filter((e: any) => e.id === id).length > 0) {
      ItemsContext.itemsAPIState[0].quantity += 1;
      ItemsContext.setItemsAPIState([...ItemsContext.itemsAPIState]);
      ItemsContext.setOrderItems([...ItemsContext.orderItems]);
    } else {
      ItemsContext.setOrderItems([
        ...ItemsContext.orderItems,
        {
          id,
          title,
          price,
          aviableBowls,
          quantity,
        },
      ]);
    }
  };
  return (
    <div className="Card" onClick={addToOrders}>
      <div className="CardImage">
        <img src={ProductImage} />
      </div>
      <div className="CardTitle">{title}</div>
      <div className="CardPrice">$ {price}</div>
      <div className="CardDesc">{aviableBowls} Bowls available</div>
    </div>
  );
}
