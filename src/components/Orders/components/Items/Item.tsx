import DeleteIcon from "../../../../images/icons/Delete.png";
import { useContext } from "react";
import { ItemsProvider } from "../../../../main/App";

interface ItemInterface {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
export default function Item({
  title,
  price,
  quantity,
  id,
  image,
}: ItemInterface) {
  const ItemsContext = useContext<any>(ItemsProvider);
  console.log(ItemsContext.orderItems);

  const deleteOrder = () => {
    const afterDelete = ItemsContext.orderItems.filter((e: any) => e.id !== id);

    if (afterDelete !== -1) {
      ItemsContext.orderItems.slice(afterDelete, 1);
      ItemsContext.setOrderItems([...afterDelete]);
    }
  };
  return (
    <div className="item">
      <div className="item-topside-info">
        <div className="item-image">
          <img src={image} width="40px" alt="" />
          <div>
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
        </div>

        <div className="item-moreinfo">
          <div className="quantity">
            <h3>{quantity}</h3>
          </div>
          <h4>${(price * quantity).toFixed(2)}</h4>
        </div>
      </div>
      <div className="item-bottomside-info">
        <div className="item-message">
          <input
            type="text"
            placeholder="Please, just a little bit spicy only."
          />
        </div>
        <div className="delete-item" onClick={deleteOrder}>
          <img src={DeleteIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
