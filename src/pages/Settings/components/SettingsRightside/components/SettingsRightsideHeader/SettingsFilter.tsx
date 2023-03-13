import React, { useState } from "react";
import { SettingsFilterAPI } from "../../../../../../api/SettingsFilterAPI";
import "./SettingsRightsideHeader.css";

export default function SettingsFilter() {
  const [activeFilter, setActiveFilter] = useState(-1);
  return (
    <div className="settings-filter">
      {SettingsFilterAPI.map((e, i) => (
        <h3
          key={i}
          className={`${activeFilter == i ? "ActiveFilter" : ""}`}
          onClick={() => setActiveFilter(i)}
        >
          {e}
        </h3>
      ))}
    </div>
  );
}
