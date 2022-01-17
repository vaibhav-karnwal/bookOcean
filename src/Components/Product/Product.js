import React from "react";
import Detail from "./Detail";

export default function Product(props){
    const {img, title, price} = props
    
    return(
        <>
            <div style={{"width" : "18.5%"}} className="card border-2 p-2 m-2 d-flex flex-column">
                <img src={img} alt="img"/>
                <h6 className="text-primary">{title}</h6>
                <h6 className="text-danger">Price : Rs {price}</h6>
            </div>
        </>
    )
}