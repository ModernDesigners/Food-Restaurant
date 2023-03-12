import "./HomeRowwer.css";
import DropDownIcon from "../../../../images/icons/DropDown.png";
import Card from "../../../../components/Card/Card";
import { ItemsProvider } from "../../../../main/App";
import { useContext } from "react";

export default function HomeRowwer() {
  const ItemsContext = useContext<any>(ItemsProvider);

  return (
    <div className="HomeRowwer">
      <div className="HomeRowwerStarter">
        <div className="Starter_Text">Choose Dishes</div>
        <div className="Starter_Dropdown">
          <img src={DropDownIcon} /> Dine In
        </div>
      </div>
      <div className="HomeRowwerCardRow">
        {ItemsContext.itemsAPIState.map((e: any, i: number) => (
          <Card
            image={e.image}
            id={e.id}
            key={i}
            title={e.title}
            price={e.price}
            aviableBowls={e.aviableBowls}
            quantity={e.quantity}
          />
        ))}
      </div>
    </div>
  );
}
