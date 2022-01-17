import React, { useEffect,useState } from 'react'
import data from "../data/Emp.json"
import { Link } from 'react-router-dom'

export default function Login(){
    
    const [user,setuser] = useState(data)
    let isLogged = false;

    const [employee, setemployee] = useState({
        password : "",
        email : "",
        token : ""
    })

    useEffect(()=>{
        document.title="Register"
        if(isLogged===true){
            <Link to="/login"></Link> 
        }
    })

    const emailHandler = (event)=>{
        setemployee({...employee, email : event.target.value})
    }
    const passwordHandler = (event)=>{
        setemployee({...employee, password : event.target.value})
    }
    
    const checkUser=()=>{
        setemployee(...employee, employee.token = employee.name+employee.password)

        let newData = user.filter(userDetail=>userDetail.token===employee.token)
        if(newData==null){
            console.log("no user found");
        }else{
            setuser(newData)
           isLogged=true;
        }
    }

    return(
        <section className='text-center'>
            <h1 className=''>Login</h1>
            <form style={{"margin":"0 auto"}}  className='w-25 gap-2 card p-2 d-flex flex-column align-items-center my-2'>
               <input type="text" id="login" value = {employee.email} onChange={emailHandler} className="fadeIn second" name="login" placeholder="example@gmail.com"/>
                <input type="text" id="password" value = {employee.password} onChange={passwordHandler} className="fadeIn third" name="login" placeholder="password"/>
                <input type="submit" className="fadeIn fourth" onClick={checkUser} value="Login"/>
            </form>
        </section>
    )
}
