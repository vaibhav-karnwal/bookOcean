import React, { useEffect } from 'react'

export default function Login(){

    useEffect(()=>{
        document.title="Login"
    })   
    return(
        <section className='text-center' >
            <h1 className=''>Login</h1>
            <form style={{"margin":"0 auto"}} className=' w-25 py-4 gap-2 card d-flex flex-column align-items-center'>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="example@gmail.com"/>
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
                <input type="submit" class="fadeIn fourth" value="Log In"/>
            </form>
        </section>
    )
}
