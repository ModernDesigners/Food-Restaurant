import "./SettingsRightsideHeader.css";
import categoriesIcon from "../../../../../../images/icons/settingspage/Option.png";
import SettingsFilter from "./SettingsFilter";

export default function SettingsRightsideHeader() {
  return (
    <div className="settings-rightside-header">
      <div className="topside">
        <h1>Products Management</h1>
        <div className="categories">
          <img src={categoriesIcon} alt="" />
          <h4>Manage Categories</h4>
        </div>
      </div>
      <SettingsFilter />
    </div>
  );
}
