import React, { useEffect, useState } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UserContext';
function Login() {
  const [User,setUser]=useState({
    UseName:"",Email: "",Password: ""
  })
  const navigator=useNavigate();
  const [error,setError]=useState("");
  const {authUser,setAuthUser,isLogged,setisLogged}=useAuth();
  let temp_1,temp_2;
  const handleInputs = (e) =>{
   console.log(e.target.value);
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
    console.log(addUser);
    const response=await fetch("http://localhost:9000/login",{
      method:"POST",
      body: JSON.stringify(addUser),
      headers:{
        "Content-Type": "application/json",
      }
    });
    const result=await response.json();
    //console.log(result.auth);
    if(!response.ok){
      console.log(result.error);
      setError(result.error);
    }
    if(response.ok){
      console.log(result.token);
      localStorage.setItem('token',JSON.stringify(result.token));
      setError("");
      setisLogged(true);
      console.log(isLogged);
      setAuthUser(name);
      console.log(authUser)
      localStorage.setItem('user',name);
      // const temp={
      //   UserName:"",Email:"",password:""
      // }
      // setUser(temp);
      navigator('/');
    }
  }
  
  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className='signin-form'>
        {error&&<div className="alert alert-danger">
      {error}
      </div>}
          <h1>Log in</h1>
          <input type='text' className='input-form' placeholder='UserName' name='UserName' value={User.UserName} onChange={handleInputs} autoComplete='off'></input>
          <input type='email' className='input-form' placeholder='Email' name='Email' value={User.Email} onChange={handleInputs} autoComplete='off'></input>
          <input type='password' className='input-form' placeholder='Password' name='Password' value={User.Password} onChange={handleInputs} autoComplete='off'></input>
          <button type='submit' className='btn-form'>Log in</button>
        </div>
      </form>
    </>
  )
}

export default Login
