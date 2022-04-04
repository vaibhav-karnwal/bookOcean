import React from "react";
import style from "../card/Card.css";

const Card = ({ children, title ,className }) => {
  return (
    <>
      <div className={`h1 ${className} d-flex`}>{title}</div>
      <div className={`card ${className} gap-2 d-flex`}>{children}</div>
    </>
  );
};

export default Card;
