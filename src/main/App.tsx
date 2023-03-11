import { LeftsideNavbar } from "../components";
import Orders from "../components/Orders/Orders";
import Home from "../pages/Home/Home";

function App() {
  return (
    <div className="App">
      <LeftsideNavbar />
      <Home />
      <Orders />
    </div>
  );
}

export default App;
