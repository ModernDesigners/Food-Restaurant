import { LeftsideNavbar } from "../components";
import Orders from "../components/Orders/Orders";
import Home from "../pages/Home/Home";
import { createContext, useState } from "react";
export const ItemsProvider = createContext<any>({});
import { ItemsAPI } from "../api/ItemsAPI";
import Dashboard from "../pages/Dashboard/Dashboard";
import Settings from "../pages/Settings/Settings";
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
        <Settings />
      </div>
    </ItemsProvider.Provider>
  );
}

export default App;
