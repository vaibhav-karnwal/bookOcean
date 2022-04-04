import React from "react";
import { Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login-Register/Login";
import LoginRegister from "./Components/Login-Register/LoginRegister";
import Register from "./Components/Login-Register/Register";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar";
import FilteredProduct from "./Components/ProductUI/FilteredProduct";
import Detail from "./Components/ProductUI/detail/Detail";
import Cart from "./Components/Cart/Cart";

export default function App() {
  return (
    <>
      <Navbar />
      <section>
        <Route exact path="/bookOcean" component={Main} />
        <Route exact path="/bookOcean" component={Home} />
        <Route exact path="/loginregister" component={LoginRegister} />
        <Route exact path="/product" component={FilteredProduct} />
        <Route exact path={`/detail/:id`} component={Detail} />
        <Route exact path={`/cart`} component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </section>
      <Footer />
    </>
  );
}
