import "./Home.css";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import HomeRowwer from "./components/HomeRowwer/HomeRowwer";
import Orders from "../../components/Orders/Orders";
import { useContext } from "react";
import { ItemsProvider } from "../../main/App";
export default function Home() {
  const navToggles = useContext(ItemsProvider);
  return (
    <div className={`homepage ${navToggles.navToggle ? "navToggled" : ""}`}>
      <HomeHeader />
      <HomeRowwer />
      <Orders />
    </div>
  );
}
