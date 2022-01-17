import React ,{ useState ,useEffect} from "react";
import Login from "./Login";
import Register from "./Register";
import {Switch, Route } from 'react-router-dom'


export default function LoginRegister(){
    useEffect(()=>{
        document.title="Login/Register"
    })

    return(
        <>
            <h6>You are not logged In</h6>
            <Switch className="gap-2 p-2 bg-light w-25">
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </>
    )
}
                