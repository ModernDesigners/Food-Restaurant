import React, { useEffect, useState } from "react";
import "./LeftsideNavbar.css";
import LeftsideNavLink from "./LeftsideNavLink";
import icon from "../../images/icons/Home.png";
import { NavLinksAPI } from "../../api/NavLinksAPI";
import { useLocation } from "react-router-dom";
export default function LeftsideNavbar() {
  let location = useLocation();
  const [ActiveNav, setActiveNav] = useState(1);
  useEffect(() => {
    switch (location.pathname) {
      case "/Settings":
        setActiveNav(6);
        break;
      case "/Dashboard":
        setActiveNav(3);
        break;
    }
  }, []);
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
