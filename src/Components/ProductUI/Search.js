import React ,{ useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Product from "./Product";

export default function Search(props){
    return(
        <section className="container">
            <div className="row">    
                <Product key={props.title} {...props}/>
            </div>
        </section>
    )
}
                