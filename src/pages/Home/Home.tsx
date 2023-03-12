import "./Home.css";
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
