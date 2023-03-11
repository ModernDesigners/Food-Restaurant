import React from "react";
import { localDate } from "../../components/LocalDate";
import "./Home.css";
import { AiOutlineSearch } from "react-icons/ai";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import HomeRowwer from "./components/HomeRowwer/HomeRowwer";
export default function Home() {
  return (
    <div className="homepage">
      <HomeHeader />
      <HomeRowwer />
    </div>
  );
}
