import React,{useEffect} from "react";
import {Switch,Route} from 'react-router-dom';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login-Register/Login";
import LoginRegister from "./Components/Login-Register/LoginRegister";
import Register from "./Components/Login-Register/Register";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar";


export default function App(){
    
    return(
        <>
            <Navbar/>
            <section>
                <Route exact path="/" component={Main}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/loginregister" component={LoginRegister}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
            </section>
            <Footer/>
        </>
    )
}