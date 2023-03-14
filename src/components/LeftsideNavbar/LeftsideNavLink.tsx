import { Link } from "react-router-dom";
import "./LeftsideNavbar.css";
interface LeftsideNavLink {
  icon: any;
  first?: number;
  linkTo: string;
  ActiveNav: number;
  click: any;
}
export default function LeftsideNavLink({
  icon,
  first,
  linkTo,
  ActiveNav,
  click,
}: LeftsideNavLink) {
  return (
    <div
      className={`leftside-navlink ${ActiveNav == first ? "activeNav" : ""}`}
    >
      <Link to={linkTo}>
        <div
          onClick={first == 0 ? () => click(1) : () => click(first)}
          className={`leftside-navlink-box ${first == 0 ? "firstB" : ""}`}
        >
          <img src={icon} />
        </div>
      </Link>
    </div>
  );
}
