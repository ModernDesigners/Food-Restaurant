import { RxDotFilled } from "react-icons/rx";
import editIcon from "../../../../../../images/icons/settingspage/Edit.png";

interface DishInterface {
  image: string;
  price: number;
  bowls: number;
  title: string;
}
export default function Dish({ image, price, bowls, title }: DishInterface) {
  return (
    <div className="dish">
      <div className="dish-image">
        <img src={image} alt="" />
      </div>
      <h4 className="dish-title">{title}</h4>
      <div className="dish-price">
        <p>$ {price}</p>
        <RxDotFilled />
        <p>{bowls} Bowls</p>
      </div>
      <div className="edit-dish">
        <img src={editIcon} alt="" />
        <h4>Edit Dish</h4>
      </div>
    </div>
  );
}
