import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import DashboardOrderReports from "./components/DashboardOrderRepors/DashboardOrderReports";
import DashboardStatCards from "./components/DashboardStatCards/DashboardStatCards";

export default function DashboardLeftSide() {
  return (
    <div className="DashboardLeftSide">
      <DashboardHeader />
      <DashboardStatCards />
      <DashboardOrderReports />
    </div>
  );
}
