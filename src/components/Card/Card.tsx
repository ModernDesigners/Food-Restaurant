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
  image: string;
}

export default function Card({
  title,
  price,
  aviableBowls,
  id,
  quantity,
  image,
}: cardInterface) {
  const ItemsContext = useContext<any>(ItemsProvider);
  const addToOrders = () => {
    const correctId = ItemsContext.orderItems.findIndex(
      (e: any) => e.id === id
    );

    if (ItemsContext.orderItems?.filter((e: any) => e.id === id).length > 0) {
      ItemsContext.orderItems[correctId].quantity += 1;
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
          image,
        },
      ]);
    }
  };
  return (
    <div className="Card">
      <div className="CardImage">
        <img src={image} />
      </div>
      <div className="CardTitle">{title}</div>
      <div className="CardPrice">$ {price.toFixed(2)}</div>
      <div className="CardDesc">{aviableBowls} Bowls available</div>
      <div className="CardButtoner">
        <button onClick={addToOrders}>ORDER</button>
      </div>
    </div>
  );
}
