import StatCard from "./components/StatCard";
import "./DashboardStatCards.css";

import Coin from "../../../../images/icons/statspage/Coin.png";
import Order from "../../../../images/icons/statspage/Order.png";
import Customer from "../../../../images/icons/statspage/Customer.png";
export default function DashboardStatCards() {
  return (
    <div className="StatCardsRow">
      <StatCard
        icon={Coin}
        percentage={32.4}
        info="$10,243.00"
        end="Total Revenue"
      />
      <StatCard
        icon={Order}
        percentage={-12.4}
        info="23,456"
        end="Total Dish Ordered"
      />
      <StatCard
        icon={Customer}
        percentage={2.4}
        info="1,234"
        end="Total Customer"
      />
    </div>
  );
}
