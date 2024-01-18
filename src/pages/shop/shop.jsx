import React, { useContext } from "react";
import { useState, useEffect } from "react";
//import { PRODUCTS } from "../../products";
import { Product } from "./products";
import { CartContext } from "../../context/cart-context";
import { login } from "./login";
import "./shop.css";

export const Shop = () => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    async function fetchStock() {
      try {
        const response = await fetch("http://127.0.0.1:8000/products/");
        const result = await response.json();
        setStock(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchStock();
  }, []);

  const { user, setUser } = useContext(CartContext);
  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      
      <div className="shop">
        <div className="shopTitle">
          <h1>PedroTech Shop</h1>
        </div>

        <div className="products">
          {stock.map((product) => (
            <>
              <Product data={product} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};
