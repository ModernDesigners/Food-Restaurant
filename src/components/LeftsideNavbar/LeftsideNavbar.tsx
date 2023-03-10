import React, { useState } from "react";
import "./LeftsideNavbar.css";
import LeftsideNavLink from "./LeftsideNavLink";
import icon from "../../images/icons/Home.png";
import { NavLinksAPI } from "../../api/NavLinksAPI";
import { useNavigate } from "react-router-dom";
export default function LeftsideNavbar() {
  const navigate = useNavigate();
  const [ActiveNav, setActiveNav] = useState(-1);
  const navClick = (i: number, e: any) => {
    i !== 0 ? setActiveNav(i) : null;
    navigate(e.navigateTo);
  };

  return (
    <div className="leftside-navbar">
      {NavLinksAPI.map((e, i) => (
        <LeftsideNavLink
          ActiveNav={ActiveNav}
          key={i}
          click={() => navClick(i, e)}
          icon={e.svg}
          first={i}
        />
      ))}
    </div>
  );
}
