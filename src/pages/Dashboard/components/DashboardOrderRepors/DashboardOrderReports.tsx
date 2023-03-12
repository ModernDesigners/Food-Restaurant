import "./DashboardOrderReports.css";

import OptionIcon from "../../../../images/icons/statspage/Option.png";
import ReportProfileBlock from "./ReportProfileBlock";
import { UserReportsAPI } from "../../../../api/UserReportsAPI";
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
      <div className="CatergoriesReport">
        <div className="g-3">Customer</div>
        <div className="g-3">Menu</div>
        <div className="g-2">Total Payment</div>
        <div className="g-2">Status</div>
      </div>
      <div className="lineReport"></div>

      <div className="ProfileReportsRow">
        {UserReportsAPI.map((e: any, i: number) => (
          <ReportProfileBlock
            key={i}
            image={e.image}
            name={e.name}
            description={e.description}
            price={e.price}
            status={e.status}
          />
        ))}
      </div>
    </div>
  );
}
