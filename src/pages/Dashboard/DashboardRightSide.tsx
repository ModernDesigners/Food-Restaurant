import MostOrdered from "./componentsRightSide/MostOrdered";
import OrderAnalytics from "./componentsRightSide/OrderAnalytics";

export default function DashboardRightSide() {
  return (
    <div className="DashboardRightSide">
      <MostOrdered />
      <OrderAnalytics />
    </div>
  );
}
