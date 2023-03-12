import "./OrderAnalytics.css";
import DrowpDdown from "../../../images/icons/DropDown.png";

export default function OrderAnalytics() {
  return (
    <div className="OrderAnalytics">
      <div className="AnalyticsT">
        <div className="MostOrderedStarter">
          <div className="name">Most Type of Order</div>
          <div className="block">
            <img src={DrowpDdown} />
            Today
          </div>
        </div>
        <div className="lineO"></div>
      </div>
    </div>
  );
}
