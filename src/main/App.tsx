import { LeftsideNavbar } from "../components";
import Orders from "../components/Orders/Orders";
import Home from "../pages/Home/Home";
import { createContext, useEffect, useState } from "react";
import { ItemsAPI } from "../api/ItemsAPI";
import Dashboard from "../pages/Dashboard/Dashboard";
import Settings from "../pages/Settings/Settings";
import { Route, Routes, useLocation } from "react-router-dom";
export const ItemsProvider = createContext<any>({});
function App() {
  const [navToggle, setNavToggle] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setNavToggle(false);
  }, [location.pathname]);

  const [itemsAPIState, setItemsAPIState] = useState(ItemsAPI);
  const [orderItems, setOrderItems] = useState([]);
  return (
    <ItemsProvider.Provider
      value={{
        itemsAPIState,
        setItemsAPIState,
        orderItems,
        setOrderItems,
        navToggle,
        setNavToggle,
      }}
    >
      <div className="App">
        <LeftsideNavbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </ItemsProvider.Provider>
  );
}

export default App;
