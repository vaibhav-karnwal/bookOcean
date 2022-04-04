import React from "react";
import CartBox from "../common/CartBox";

export default function Cart() {
  const cartList = JSON.parse(localStorage.getItem("cartList") || "[]");
  const removeProduct = (id) => {
    let newCartProduct = cartList.filter((product) => product.id !== id);
    cartList.push(newCartProduct);
    localStorage.setItem("cartList", JSON.stringify(cartList));
  };
  const clearCart = () => {
    localStorage.setItem("cartList", JSON.stringify([]));
  };

  return (
    <div className="card border-2 p-2 m-2 d-flex flex-column">
      {cartList.map((product) => {
        return <CartBox key={product.id} {...product} />;
      })}
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
}
