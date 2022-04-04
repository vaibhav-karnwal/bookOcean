import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { setProductCategoryId, setProductId } from "../Utils/ProductList";
import Detail from "./detail/Detail";

export default function Product(props) {
  const cartList = JSON.parse(localStorage.getItem("cartList") || "[]");
  const addCart = (product) => {
    if (cartList.includes(product)) {
      localStorage.setItem("cartList", JSON.stringify(cartList));
    } else {
      cartList.push(product);
      localStorage.setItem("cartList", JSON.stringify(cartList));
    }
  };

  const history = useHistory();
  return (
    <>
      <div
        style={{ width: "18.5%" }}
        className="card border-2 p-2 m-2 d-flex flex-column"
      >
        <Link to={`/detail/${props.id}`}>
          <img className="w-100" src={props.img} alt="img" />
          <h6 className="text-primary">{props.title}</h6>
        </Link>
        <h6 className="text-danger">Price : Rs {props.price}</h6>

        <button className="btn btn-secondary" onClick={() => addCart(props)}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
