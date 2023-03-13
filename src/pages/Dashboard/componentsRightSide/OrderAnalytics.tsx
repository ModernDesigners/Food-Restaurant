import "./OrderAnalytics.css";
import DrowpDdown from "../../../images/icons/DropDown.png";
import { useEffect, useState } from "react";

export default function OrderAnalytics() {
  const [pageLoaded, setPageLoaded] = useState(0);
  useEffect(() => {
    setPageLoaded(1);
  }, []);

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
        <div className="getAnalytics">
          <div className="g-55 circleStats">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs></defs>
              <circle
                cx="80"
                cy="80"
                r="70"
                strokeLinecap="round"
                className="bC2"
              />
              <circle
                cx="80"
                cy="80"
                r="58"
                strokeLinecap="round"
                className="bC1"
              />
              <circle
                cx="80"
                cy="80"
                r="46"
                strokeLinecap="round"
                className="bC2"
              />
              <circle
                cx="80"
                cy="80"
                r="34"
                strokeLinecap="round"
                className="bC1"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                strokeLinecap="round"
                className={`cc1 ${pageLoaded ? "" : "untL"}`}
              />
              <circle
                cx="80"
                cy="80"
                r="58"
                strokeLinecap="round"
                className={`cc2 ${pageLoaded ? "" : "untL"}`}
              />
              <circle
                cx="80"
                cy="80"
                r="46"
                strokeLinecap="round"
                className={`cc3 ${pageLoaded ? "" : "untL"}`}
              />
            </svg>
          </div>
          <div className="g-45 infoStats">
            <div className="CBlock">
              <div className="color c1"></div>
              <div className="tx">
                <div className="name">Dine In</div>
                <div className="desc">200 customers</div>
              </div>
            </div>
            <div className="CBlock">
              <div className="color c2"></div>
              <div className="tx">
                <div className="name">To Go</div>
                <div className="desc">122 customers</div>
              </div>
            </div>
            <div className="CBlock">
              <div className="color c3"></div>
              <div className="tx">
                <div className="name">Delivery</div>
                <div className="desc">264 customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
