import { LeftsideNavbar } from "../components";
import Orders from "../components/Orders/Orders";
import Home from "../pages/Home/Home";
import { createContext, useState } from "react";
export const ItemsProvider = createContext<any>({});
import { ItemsAPI } from "../api/ItemsAPI";
import Dashboard from "../pages/Dashboard/Dashboard";
import Settings from "../pages/Settings/Settings";
import { Route, Routes } from "react-router-dom";
function App() {
  const [itemsAPIState, setItemsAPIState] = useState(ItemsAPI);
  const [orderItems, setOrderItems] = useState([]);
  return (
    <ItemsProvider.Provider
      value={{
        itemsAPIState,
        setItemsAPIState,
        orderItems,
        setOrderItems,
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
