import React from "react";
import Card from "../card/Card";

export default function Detail(props) {
  const { img, title, price, description, id } = props;
  let cartData = localStorage.getItem("cartData") || [];

  const addCart = (id) => {
    let updateData = [];
    updateData = cartData.push(props);
    console.log(updateData);
    localStorage.setItem("cartData", JSON.stringify(updateData));
  };

  return (
    <>
      <Card className={`p-4`} title={title}>
        <img src={img} alt="" />
        <h6>{title}</h6>
        <p>{description}</p>
        <span>Price : Rs {price}</span>
        <span onClick={() => addCart(id)}>Add to Cart</span>
      </Card>
    </>
  );
}
