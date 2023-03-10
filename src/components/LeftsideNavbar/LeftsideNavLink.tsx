import React from "react";
import "./LeftsideNavbar.css";
interface LeftsideNavLink {
  icon: any;
  first?: any;
  click: () => void;
  ActiveNav: number;
}
export default function LeftsideNavLink({
  icon,
  first,
  click,
  ActiveNav,
}: LeftsideNavLink) {
  return (
    <div
      className={`leftside-navlink ${ActiveNav == first ? "activeNav" : ""}`}
    >
      <div
        onClick={click}
        className={`leftside-navlink-box ${first == 0 ? "firstB" : ""}`}
        dangerouslySetInnerHTML={{ __html: icon }}
      ></div>
    </div>
  );
}
