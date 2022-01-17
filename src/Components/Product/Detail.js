import React from "react";
import { Link } from "react-router-dom";

export default function Detail(props){
    const {img, title, price, description,id} = props

    const addCart = (id) =>{
        
    }

    return(
        <>
            <div className="d-flex flex-column">
                <img src={img}/>
                <h6>{title}</h6>
                <p>{description}</p>
                <span>Price : Rs {price}</span>
                <span onClick={()=>addCart(id)}>Add to Cart</span>
            </div>
        </>
    )
}