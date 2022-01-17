import React,{useState} from "react";
import { Link } from "react-router-dom";
import Product from "./Product/Product";
import data from "./data/product.json"
import { FaSearch } from "react-icons/fa";

export default function Navbar(){

    const [name, setname] = useState("")

    const searchProduct = (event) =>{
        console.log(event.name);
        const newProduct = data.filter((product)=>product.name === event.name)
        return <Product key={newProduct.name} {...newProduct}/>
    }

    const onChangeHandler=(event)=>{
        setname(event.target.value);
    }

    return(
        <>
            <div className="d-flex justify-content-between container my-4 bg-secondary rounded">
                <Link className="text-decoration-none mx-3 p-1 bg-secondary text-white" to="/bookOcean">Home</Link> 
                <input type="search" className="input-group rounded form-control rounded" value ={name} onChange={onChangeHandler}placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button style={{"width":"60px"}} className=" text-white btn btn-secondary" onClick={searchProduct} ><FaSearch/></button>
                <Link className="text-decoration-none mx-3 p-1 bg-secondary text-white" to="/login">Login</Link> 
                <Link className="text-decoration-none mx-3 p-1 bg-secondary text-white" to="/register">Register</Link> 
                <Link className="text-decoration-none mx-3 p-1 bg-secondary text-white" to="/cart">Cart</Link> 
            </div>
            {/* <Product key={product.name} product = {product}/> */}
        </>
    )
}