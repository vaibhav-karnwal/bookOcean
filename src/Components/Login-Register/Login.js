// import React, { useEffect,useState } from 'react'
// import data from "../data/Emp.json"
// import { Link } from 'react-router-dom'

// export default function Login(){
    
//     const [user,setuser] = useState(data)
//     let isLogged = false;

//     const [employee, setemployee] = useState({
//         password : "",
//         email : "",
//         token : ""
//     })

//     useEffect(()=>{
//         document.title="Login"
//         if(isLogged===true){
//             <Link to="/login"></Link> 
//         }
//     })

//     const emailHandler = (event)=>{
//         setemployee({...employee, email : event.target.value})
//     }
//     const passwordHandler = (event)=>{
//         setemployee({...employee, password : event.target.value})
//     }
    
//     const checkUser=()=>{
//         setemployee(...employee, employee.token = employee.name+employee.password)

//         let newData = user.filter(userDetail=>userDetail.token===employee.token)
//         if(newData==null){
//             console.log("no user found");
//         }else{
//             setuser(newData)
//            isLogged=true;
//         }
//     }

//     return(
//         <section className='text-center'>
//             <h1 className=''>Login</h1>
//             <form style={{"margin":"0 auto"}}  className='w-25 py-4 px-4 border-secondary gap-2 card p-2 d-flex flex-column align-items-center my-2'>
//                 <input type="text" id="login" value = {employee.email} onChange={emailHandler} className="fadeIn first w-100 border-radius-2" name="login" placeholder="example@gmail.com"/>
//                 <input type="text" id="password" value = {employee.password} onChange={passwordHandler} className="fadeIn third w-100" name="login" placeholder="password"/>
//                 <input type="submit" className="fadeIn fourth w-25" onClick={checkUser} value="Login"/>
//                 <Link to="" className='text-danger text-decoration-none'>Forget password</Link>
//             </form>
//         </section>
//     )
// }

import React, { useEffect, useState } from "react";
import Input from "../common/Input/Input";
import Card from "../common/card/Card";
import { useHistory } from "react-router-dom";

const Login = () => {
  let userData = [];
  let isLogged = false;

  const user = {
    password: "",
    email: "",
    token: "",
  };
  const setUser =()=>{
    
  }
  const history = useHistory();
  useEffect(() => {
    userData = JSON.parse(localStorage.getItem("userData") || "[]");
    isLogged = JSON.parse(localStorage.getItem("isLogged") || "false");
    if (isLogged === true) {
      history.push("/Home");
    }
  }, [userData, isLogged]);

  // const checkAndLogin = () => {
  //   let isData = {};
  //   setUser(...user, (user.token = user.email + user.password));
  //   isData = userData.filter((data) => data.token === user.token);
  //   // isData &&
  //   localStorage.setItem("isLogged", JSON.stringify(true));
  // };

  return (
    <>
      <Card title="Login" className={`d-flex p-4 justify-content-center`}>
        <h6>You are not logged In</h6>
        <Input
          title="Email Id"
          type="text"
          id="login"
          value={user.email}
          user={user}
          setUser={setUser}
          className="fadeIn"
          name="email"
          placeholder="example@gmail.com"
        />
        <Input
          title="Password"
          type="text"
          id="password"
          value={user.password}
          user={user}
          setUser={setUser}
          className="fadeIn"
          name="password"
          placeholder="password"
        />
        <input
          type="submit"
          className="fadeIn btn btn-primary"
          onClick={() => {
            console.log("hi")
            let isData = {};
            setUser(...user, (user.token = user.email + user.password));
            isData = userData.filter((data) => data.token === user.token);
            const flag=true;
            // isData &&
            localStorage.setItem("isLogged", JSON.stringify(flag));
          }}
          value="Log In"
        />
      </Card>
    </>
  );
};

export default Login;
