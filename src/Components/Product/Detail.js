import React from "react";

export default function Detail(props){
    const {img, title, price, description} = props

    return(
        <>
            <div className="d-flex flex-column">
                <image src={img} alt="product-image"/>
                <h6>{title}</h6>
                <p>{description}</p>
                <span>Price : Rs {price}</span>
                <span>Add to Cart</span>
            </div>
        </>
    )
}