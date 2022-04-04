import React, { useState } from "react";
import Home from "../Home";
import { getProductList } from "../Utils/ProductList";
import Product from "./Product";

export default function FilteredProduct() {
  const products = getProductList();
  // array of N elements, where N is the number of rows needed
  const rows = [...Array(Math.ceil(products.length / 5))];
  // chunk the products into the array of rows
  const productRows = rows.map((row, idx) =>
    products.slice(idx * 5, idx * 5 + 5)
  );

  return (
    <section className="container">
      <div>
        {productRows.map((row, idx) => (
          <div className="row" key={idx}>
            {row.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
}
