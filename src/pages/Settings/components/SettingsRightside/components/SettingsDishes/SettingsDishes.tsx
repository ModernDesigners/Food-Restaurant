import "./SettingsDishes.css";
import { BsPlusLg } from "react-icons/bs";
import { ItemsAPI } from "../../../../../../api/ItemsAPI";
import Dish from "./Dish";
export default function SettingsDishes() {
  return (
    <div className="settings-dishes">
      <div className="add-dish">
        <BsPlusLg />
        <h3>Add new dish</h3>
      </div>
      {ItemsAPI.map((e) => (
        <Dish
          title={e.title}
          bowls={e.aviableBowls}
          image={e.image}
          price={e.price}
        />
      ))}
    </div>
  );
}
