import React, { useState } from 'react'
import '../App.css';
function Login() {
  const [User,setUser]=useState({
    UserName: "",Password: ""
  })
  let temp_1,temp_2;
  const handleInputs = (e) =>{
   console.log(e.target.value);
   temp_1=e.target.name;
   temp_2=e.target.value;

   setUser({...User,[temp_1]:temp_2});
  }
  
  
  return (
    <>
      <form action='/Login' method='post'>
        <div className='signin-form'>
          <h1>Log in</h1>
          <input type='text' className='input-form' placeholder='UserName' name='UserName' value={User.UserName} onChange={handleInputs} autoComplete='off'></input>
          <input type='password' className='input-form' placeholder='Password' name='Password' value={User.Password} onChange={handleInputs} autoComplete='off'></input>
          <button type='submit' className='btn-form'>Log in</button>
        </div>
      </form>
    </>
  )
}

export default Login
