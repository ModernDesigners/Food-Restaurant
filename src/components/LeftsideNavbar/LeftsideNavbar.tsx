import React, { useState } from "react";
import "./LeftsideNavbar.css";
import LeftsideNavLink from "./LeftsideNavLink";
import icon from "../../images/icons/Home.png";
import { NavLinksAPI } from "../../api/NavLinksAPI";
export default function LeftsideNavbar() {
  const [ActiveNav, setActiveNav] = useState(-1);

  return (
    <div>
      <div className="leftside-navbar">
        {NavLinksAPI.map((e, i) => (
          <LeftsideNavLink
            ActiveNav={ActiveNav}
            key={i}
            click={setActiveNav}
            linkTo={e.navigateTo}
            icon={e.svg}
            first={i}
          />
        ))}
      </div>
    </div>
  );
}
