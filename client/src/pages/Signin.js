import React, { useState } from 'react'
import '../App.css';

function Signin() {
  const [User,setUser]=useState({
    UserName: "",Email: "",Password: ""
  })
  const [error,setError]=useState("");
  console.log(User);
  let temp_1,temp_2;
  const handleInputs = (e) =>{
   console.log(e.target);
   temp_1=e.target.name;
   temp_2=e.target.value;

   setUser({...User,[temp_1]:temp_2});
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    let name=User.UserName;
    let email=User.Email;
    let password=User.Password;
    const addUser= {name,email,password};
    const response=await fetch("http://localhost:9000",{
      method:"POST",
      body: JSON.stringify(addUser),
      headers:{
        "Content-Type": "application/json",
      }
    });
    const result=await response.json();
    if(!response.ok){
      console.log(result.error);
      setError(result.error);
    }
    if(response.ok){
      console.log(result);
      setError("");
      const temp={
        UserName:"",Email:"",password:""
      }
      setUser(temp);
    }

  }
  return (
    <>
      <form  onSubmit={handleSubmit}>
        <div className='signin-form'>
        {error&&<div className="alert alert-danger">
      {error}
      </div>}
          <h1>Sign in</h1>
          <input type='text' className='input-form' name='UserName' value={User.UserName} onChange={handleInputs} autoComplete='off' placeholder='UserName'></input>
          <input type='email' className='input-form' name='Email' value={User.Email} onChange={handleInputs} autoComplete='off' placeholder='Email'></input>
          <input type='password' className='input-form' name='Password' value={User.Password} onChange={handleInputs} autoComplete='off' placeholder='Password'></input>
          <button type='submit' className='btn-form' >Sign in</button>
        </div>
      </form>
    </>
  )
}

export default Signin
