interface SettingsLinkInterface {
  title: string;
  paragraph: string;
  icon: string;
  setActive: any;
  active: boolean;
}
export default function SettingsLink({
  title,
  icon,
  paragraph,
  setActive,
  active,
}: SettingsLinkInterface) {
  return (
    <div
      className={`settings-link ${active ? "active" : ""}`}
      onClick={setActive}
    >
      <img src={icon} alt="Icon" />
      <div>
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
