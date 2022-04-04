// import React, { useEffect,useState } from 'react'
// import data from "../data/Emp.json"
// import { Link } from 'react-router-dom'

// export default function Register(){
    
//     const [user,setuser] = useState(data)
//     let isLogged = false;

//     const [employee, setemployee] = useState({
//         userName : "",
//         password : "",
//         email : "",
//         token : ""
//     })

//     useEffect(()=>{
//         document.title="Register"
//         if(isLogged===true){
//             <Link to="/login"></Link> 
//         }
//     })

//     const userNameHandler = (event)=>{
//         setemployee({...employee, userName : event.target.value})
//     }
//     const emailHandler = (event)=>{
//         setemployee({...employee, email : event.target.value})
//     }
//     const passwordHandler = (event)=>{
//         setemployee({...employee, password : event.target.value})
//     }

//     const addUser=()=>{
//         setemployee(...employee, employee.token = employee.name+employee.password)
//         let newData = user.put(user.length,employee)
//         setuser(newData)
//         isLogged=true;
//     }

//     return(
//         <section className='text-center'>
//             <h1 className=''>Register</h1>
//             <form style={{"margin":"0 auto"}}  className='w-25 py-4 px-4 border-secondary gap-2 card p-2 d-flex flex-column align-items-center my-2'>
//                 <input type="text" id="name" value = {employee.userName} onChange={userNameHandler} className="fadeIn first  w-100 border-radius-2" name="login" placeholder="Full Name"/>
//                 <input type="text" id="login" value = {employee.email} onChange={emailHandler} className="fadeIn second  w-100 border-radius-2" name="login" placeholder="example@gmail.com"/>
//                 <input type="text" id="password" value = {employee.password} onChange={passwordHandler} className="fadeIn third  w-100 border-radius-2" name="login" placeholder="password"/>
//                 <input type="submit" className="fadeIn fourth w-25" onClick={addUser} value="Register"/>
//             </form>
//         </section>
//     )
// }

import React, { useEffect, useState } from "react";
import Input from "../common/Input/Input";
import Card from "../common/card/Card";
import { useHistory } from "react-router-dom";

const Register = () => {
  let userData = localStorage.getItem("userData") || [];
  let isLogged = false;
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
    token: "",
  });

  localStorage.setItem("isLogged", JSON.stringify(true));
  const history = useHistory();
  useEffect(() => {
    isLogged = localStorage.getItem("isLogged") || false;
    if (isLogged === true) {
      history.push("/Home");
    }
  }, [userData, isLogged]);

  const addUser = () => {
    let updateData = [];
    setUser(...user, (user.token = user.email + user.password));
    updateData = userData.push(user);
    console.log(updateData)
    localStorage.setItem("userData", JSON.stringify(updateData));
    localStorage.setItem("isLogged", JSON.stringify(true));
  };

  return (
    <>
      <Card title="Register" className={`d-flex p-4 justify-content-center`}>
        <Input
          title="UserName"
          type="text"
          id="name"
          value={user.userName}
          user={user}
          setUser={setUser}
          className="fadeIn first"
          name={"userName"}
          placeholder="Full Name"
        />
        <Input
          title="Email Id"
          type="text"
          id="login"
          value={user.email}
          user={user}
          setUser={setUser}
          className="fadeIn second"
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
          onClick={addUser}
          value="Register"
        />
      </Card>
    </>
  );
};

export default Register;
