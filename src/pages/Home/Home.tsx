import "./Home.css";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import HomeRowwer from "./components/HomeRowwer/HomeRowwer";
import Orders from "../../components/Orders/Orders";
export default function Home() {
  return (
    <div className="homepage">
      <HomeHeader />
      <HomeRowwer />
      <Orders />
    </div>
  );
}
