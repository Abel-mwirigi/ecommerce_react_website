import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { ShopContextProvider } from "./context/shop-context";
import { CartContext } from "./context/cart-context";
import { Cart } from "./pages/cart/cart";
import { useState, useMemo } from "react";

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <CartContext.Provider value={value}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </CartContext.Provider>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
