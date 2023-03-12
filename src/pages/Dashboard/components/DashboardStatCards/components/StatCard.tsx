import "./StatCard.css";
import perUp from "../../../../../images/icons/statspage/perUp.png";
import perDown from "../../../../../images/icons/statspage/perDown.png";
interface StatCardInterface {
  icon: string;
  percentage: number;
  info: string;
  end: string;
}
export default function StatCard({
  icon,
  percentage,
  info,
  end,
}: StatCardInterface) {
  let Profit = 1;
  if (percentage < 0) {
    Profit = 0;
  }
  return (
    <div className="StatCard">
      <div className="StatCardStart">
        <div className="icon">
          <img src={icon} />
        </div>
        <div className={`Percentage ${Profit ? "PerUp" : "PerDown"}`}>
          {Profit
            ? "+" + percentage.toFixed(2) + "%"
            : percentage.toFixed(2) + "%"}
        </div>
        <div className="PercentageIcon">
          <img src={Profit ? perUp : perDown} />
        </div>
      </div>
      <div className="StatCardStartInfo">{info}</div>
      <div className="StatCardStartDesc">{end}</div>
    </div>
  );
}
