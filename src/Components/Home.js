import React, { useEffect } from "react";
import Product from "./ProductUI/Product";
import data from "./data/product.json";

export default function Home(props) {
  useEffect(() => {
    document.title = "BookOcean";
  });
  // array of N elements, where N is the number of rows needed
  const rows = [...Array(Math.ceil(data.length / 5))];
  // chunk the products into the array of rows
  const productRows = rows.map((row, idx) => data.slice(idx * 5, idx * 5 + 5));

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
