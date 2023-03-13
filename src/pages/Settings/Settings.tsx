import React from "react";
import SettingsLeftside from "./components/SettingsLeftside/SettingsLeftside";
import SettingsRightside from "./components/SettingsRightside/SettingsRightside";
import "./Settings.css";
export default function Settings() {
  return (
    <div className="settings">
      <h1 className="header-h1">Settings</h1>
      <div className="settings-main">
        <SettingsLeftside />
        <SettingsRightside />
      </div>
    </div>
  );
}
