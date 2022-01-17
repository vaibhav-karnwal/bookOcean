import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){

    
    return(
        <>
            <div className="d-flex justify-content-between container my-4 bg-secondary rounded">
                <Link className="text-decoration-none mx-3 p-1 bg-secondary text-white" to="/">Home</Link> 
                <input type="search" class="input-group rounded form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <Link className="text-decoration-none mx-3 p-1 bg-secondary text-white" to="/login">Login</Link> 
                <Link className="text-decoration-none mx-3 p-1 bg-secondary text-white" to="/register">Register</Link> 
                <Link className="text-decoration-none mx-3 p-1 bg-secondary text-white" to="/cart">Cart</Link> 
            </div>
        </>
    )
}