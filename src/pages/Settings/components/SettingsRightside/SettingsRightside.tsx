import SettingsDishes from "./components/SettingsDishes/SettingsDishes";
import SettingsRightsideHeader from "./components/SettingsRightsideHeader/SettingsRightsideHeader";
import "./SettingsRightside.css";
export default function SettingsRightside() {
  return (
    <div className="settings-rightside">
      <SettingsRightsideHeader />
      <SettingsDishes />
    </div>
  );
}
