import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import DashboardLeftSide from "./DashboardLeftSide";
import DashboardStatCards from "./components/DashboardStatCards/DashboardStatCards";
import "./Dashboard.css";
import DashboardRightSide from "./DashboardRightSide";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <DashboardLeftSide />
      <DashboardRightSide />
    </div>
  );
}
