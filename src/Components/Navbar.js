import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "./data/product.json";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { setfilteredProductName } from "./Utils/ProductList";
export default function Navbar() {
  const [name, setname] = useState("");
  let newProduct = "";
  let history = useHistory();
  let isLogged = false;

  useEffect(() => {
    if (name !== "") {
      searchProduct();
    }
  }, [name]);

  useEffect(() => {
    isLogged = JSON.parse(localStorage.getItem("isLogged") || "false");
  });

  const searchProduct = () => {
    newProduct =
      name === ""
        ? data.filter((product) => product)
        : data.filter((product) => product.title === name);
    try {
      setfilteredProductName(name);
      history.push("/product");
      //   <Link to="/product" newProduct={newProduct} />;
    } catch (e) {
      console.log(e);
    }
  };

  function onChangeHandler(event) {
    setname(event.target.value);
  }

  return (
    <>
      <div className="d-flex justify-content-between container my-4 bg-secondary rounded">
        <Link
          className="text-decoration-none mx-3 p-1 bg-secondary text-white"
          to="/bookOcean"
        >
          BookOcean
        </Link>
        <select
          className="text-decoration-none mx-3 p-1 bg-secondary text-white"
          id="dropdown"
          onChange={(event) => {
            onChangeHandler(event);
          }}
        >
          <option value="">All Books</option>
          <option value="Java1">Java1</option>
          <option value="Java2">Java2</option>
          <option value="Java3">Java3</option>
          <option value="Java4">Java4</option>
        </select>
        <input
          type="search"
          className="input-group rounded form-control rounded"
          value={name}
          onChange={onChangeHandler}
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button
          style={{ width: "60px" }}
          className=" text-white btn btn-secondary"
          onClick={searchProduct}
        >
          <FaSearch />
        </button>
        {isLogged === true && (
          <Link
            className="text-decoration-none mx-3 p-1 bg-secondary text-white"
            to="/login"
          >
            Login
          </Link>
        )}
        {isLogged === true && (
          <Link
            className="text-decoration-none mx-3 p-1 bg-secondary text-white"
            to="/register"
          >
            Register
          </Link>
        )}
        <Link
          className="text-decoration-none mx-3 p-1 bg-secondary text-white"
          to="/cart"
        >
          Cart
        </Link>
      </div>
    </>
  );
}
