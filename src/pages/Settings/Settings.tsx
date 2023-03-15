import React from "react";
import SettingsLeftside from "./components/SettingsLeftside/SettingsLeftside";
import SettingsRightside from "./components/SettingsRightside/SettingsRightside";
import "./Settings.css";
import { useContext } from "react";
import { ItemsProvider } from "../../main/App";
export default function Settings() {
  const navToggles = useContext(ItemsProvider);

  return (
    <div className={`settings ${navToggles.navToggle ? "navToggled" : ""}`}>
      <h1 className="header-h1">Settings</h1>
      <div className="settings-main">
        <SettingsLeftside />
        <SettingsRightside />
      </div>
    </div>
  );
}
