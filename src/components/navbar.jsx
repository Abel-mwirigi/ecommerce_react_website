import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { CartContext } from "../context/cart-context";
import { login } from "../pages/shop/login";
import "./navbar.css";

export const Navbar = () => {
  const { user, setUser } = useContext(CartContext);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        {user ? (
          <button
            onClick={() => {
              setUser(null);
            }}
          >
            logout
          </button>
        ) : (
          <button
            onClick={async () => {
              const user = await login();
              setUser(user);
            }}
          >
            login
          </button>
        )}
      </div>
    </div>
  );
};
