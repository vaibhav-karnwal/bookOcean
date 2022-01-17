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
        document.title="Login"
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
            <form style={{"margin":"0 auto"}}  className='w-25 py-4 px-4 border-secondary gap-2 card p-2 d-flex flex-column align-items-center my-2'>
                <input type="text" id="login" value = {employee.email} onChange={emailHandler} className="fadeIn first w-100 border-radius-2" name="login" placeholder="example@gmail.com"/>
                <input type="text" id="password" value = {employee.password} onChange={passwordHandler} className="fadeIn third w-100" name="login" placeholder="password"/>
                <input type="submit" className="fadeIn fourth w-25" onClick={checkUser} value="Login"/>
                <Link to="" className='text-danger text-decoration-none'>Forget password</Link>
            </form>
        </section>
    )
}
