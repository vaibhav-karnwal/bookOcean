import React from "react";
import Card from "../card/Card";
import Detail from "../detail/Detail";
import style from "./Product.css";

export default function Product(props) {
  const { img, title, price } = props;
  const showDetail = (id) => {
    let detail = props.filter((product) => {
      product.id === id;
    });
    return <Detail key={id} {...detail} />;
  };
  return (
    <Card className={`productCard card border-2 p-0 m-1`}>
      <img src={img} alt="img" />
      <h6 onClick={() => showDetail(props.id)} className="text-primary px-2">{title}</h6>
      <h6 className="text-danger px-2">Price : Rs {price}</h6>
    </Card>
  );
}
