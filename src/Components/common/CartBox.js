import React from "react";

export default function CartBox(props) {
  const cartList = JSON.parse(localStorage.getItem("cartList") || "[]");
  const removeProduct = (id) => {
    let newCartProduct = cartList.filter((product) => product.id !== id);
    cartList.push(newCartProduct);
    localStorage.setItem("cartList", JSON.stringify(cartList));
  };
  return (
    <>
      <div className="d-flex justify-content-between flex-row">
        <div className="fit-content">
          <img className="w-25" src={props.img} alt="product" />
        </div>
        <div className="flex-column ">
          <h6 className={`p-1 text-danger`}>{props.title}</h6>
          <div className={`p-1`}>Price : Rs {props.price}</div>
          <button
            className="btn btn-secondary"
            onClick={removeProduct(props.id)}
          >
            Remove Item
          </button>
          <p className={`p-1 text-dark`}>{props.description}</p>
        </div>
      </div>
    </>
  );
}
