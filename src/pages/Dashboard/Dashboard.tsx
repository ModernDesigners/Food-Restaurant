import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import DashboardLeftSide from "./DashboardLeftSide";
import DashboardStatCards from "./components/DashboardStatCards/DashboardStatCards";
import "./Dashboard.css";
import DashboardRightSide from "./DashboardRightSide";
import { useContext } from "react";
import { ItemsProvider } from "../../main/App";

export default function Dashboard() {
  const navToggles = useContext(ItemsProvider);
  return (
    <div className={`Dashboard ${navToggles.navToggle ? "navToggled" : ""}`}>
      <DashboardLeftSide />
      <DashboardRightSide />
    </div>
  );
}
