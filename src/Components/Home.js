import React ,{ useEffect, useState } from "react";
import Product from "./Product/Product";
import data from "./data/product.json"
import Detail from "./Product/Detail";
import RightMain from "./Main/RightMain";
import LeftMain from "./Main/LeftMain";

export default function Home(){
    
    const [products,setProducts] = useState(data)

    useEffect(()=>{
        document.title="Bookland"
    })
        // array of N elements, where N is the number of rows needed
    const rows = [...Array( Math.ceil(products.length / 5) )];
        // chunk the products into the array of rows
    const productRows = rows.map( (row, idx) => products.slice(idx * 5, idx * 5 + 5) );
        // map the rows as div.row

    // const showDetail=(id)=>{
    //     let detail = products.filter(product=>{
    //         product.id === id;
    //     })
    //     return <Detail key={id} {...detail}/>
    // }

    return(
        <section className="container">
            <div>
                {productRows.map((row, idx) => (
                    <div className="row" key={idx}>    
                        { row.map(product=>{
                        return <Product key={product.id} {...product}/>
                    })}
                    </div>
                ))}
            </div>
            <hr/>
        </section>
        
    )
}
                