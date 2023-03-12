import "./DashboardOrderReports.css";

import OptionIcon from "../../../../images/icons/statspage/Option.png";
export default function DashboardOrderReports() {
  return (
    <div className="DashboardOrderReports">
      <div className="ReportsStarter">
        <div className="name">Order Report</div>
        <div className="block">
          <img src={OptionIcon} />
          Filter Order
        </div>
      </div>
    </div>
  );
}
