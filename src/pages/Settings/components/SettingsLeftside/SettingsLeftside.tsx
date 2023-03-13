import { useState } from "react";
import "./SettingsLeftside.css";
import { SettingLinksAPI } from "../../../../api/SettingLinksAPI";
import SettingsLink from "./SettingsLink";
export default function SettingsLeftside() {
  const [active, setActive] = useState(-1);
  const activeFilter = (e: any) => {
    setActive(e);
  };
  return (
    <div className="settings-leftside">
      {SettingLinksAPI.map((e, i) => (
        <SettingsLink
          key={i}
          setActive={() => activeFilter(i)}
          active={active == i ? true : false}
          title={e.title}
          paragraph={e.paragraph}
          icon={e.icon}
        />
      ))}
    </div>
  );
}
