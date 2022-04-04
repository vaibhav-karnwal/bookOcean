import React, { useState, useEffect } from "react";
import {
  getProductList,
} from "../../Utils/ProductList";
import styles from "./Detail.module.css";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const [product, setProduct] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const productList = getProductList();
    setProduct(
      productList.filter(
        (products) => products.id === location.pathname.slice(-1)
      )
    );
    console.log(product);
  }, []);

  const cartList = localStorage.getItem("cartList");
  const addCart = () => {
    cartList.push(product.id);
    localStorage.setItem("cartList", cartList);
  };
  return (
    <>
      {product.map((data) => (
        <div className="d-flex justify-content-between flex-row">
          <div className="">
            <img className="w-75" src={data.img} alt="product-image" />
          </div>
          <div className="flex-column w-50 ">
            <h6 className={`p-1 text-danger ${styles.title}`}>{data.title}</h6>
            <div className={`p-1`}>Price : Rs {data.price}</div>
            <button className="btn btn-secondary" onClick={addCart}>
              Add to Cart
            </button>
            <p className={`p-1 text-dark`}>{data.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
