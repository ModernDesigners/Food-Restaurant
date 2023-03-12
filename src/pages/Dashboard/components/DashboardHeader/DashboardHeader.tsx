import { localDate } from "../../../../components/LocalDate";
import "./DashboardHeader.css";

export default function DashboardHeader() {
  return (
    <div className="homepage-header">
      <div className="homeheader-top">
        <div>
          <h1>Dashboard</h1>
          <h4>{localDate()}</h4>
        </div>
      </div>
    </div>
  );
}
