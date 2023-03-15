import React, { useContext, useEffect, useState } from "react";
import "./LeftsideNavbar.css";
import LeftsideNavLink from "./LeftsideNavLink";
import icon from "../../images/icons/Home.png";
import { NavLinksAPI } from "../../api/NavLinksAPI";
import { useLocation } from "react-router-dom";
import { ItemsProvider } from "../../main/App";
export default function LeftsideNavbar() {
  let location = useLocation();
  const navToggles = useContext(ItemsProvider);

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
      <div
        onClick={() => navToggles.setNavToggle(!navToggles.navToggle)}
        className={`burgerbarNav ${
          navToggles.navToggle ? "burgerbarNavActive" : ""
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`leftside-navbar ${
          navToggles.navToggle ? "navToggleOn" : "navToggleOff"
        }`}
      >
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
