import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import AddCustomer from "./customers/AddCustomer";
import AddTrader from "./traders/AddTrader";
import Header from "./Header";
import CustomerMenu from "./customers/CustomerMenu";
import TraderMenu from "./traders/traderMenu";
import Home from "./Home";
import AllCustomers from "./customers/AllCustomers";
import AddItem from "./traders/AddItem";
import Inventory from "./traders/Inventory";
import AddPromotions from "./traders/AddPromotions";
import Promotions from "./traders/Promotions";
import UpdateItems from "./traders/UpdateItems";
import Items from "./Items";
import Promos from "./Promos";
import Cart from "./Cart";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/customer" element={<CustomerMenu />} />
          <Route path="/trader" element={<TraderMenu />} />

          <Route exact path="/" element={<Home />} />
          <Route path="/addCustomer" element={<AddCustomer />} />
          <Route path="/allCustomers" element={<AllCustomers />} />

          <Route path="/addTrader" element={<AddTrader />} />

          <Route path="/addItem" element={<AddItem />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/updateItem/:id" element={<UpdateItems />} />
          <Route path="/items" element={<Items />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/addPromotion" element={<AddPromotions />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
