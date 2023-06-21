import React, { useState } from 'react'
import '../App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Axios } from 'axios';
function Signin() {
  const [User,setUser]=useState({
    UserName: "",Email: "",Password: ""
  })
  const navigate = useNavigate();
  const url="";
  let temp_1,temp_2;
  const handleInputs = (e) =>{
   console.log(e.target);
   temp_1=e.target.name;
   temp_2=e.target.value;

   setUser({...User,[temp_1]:temp_2});
  }
  // const postData = async (e) => {
  //   e.preventDefault();
  //   const {UserName,Email,Password} =User;
  //   const res=await fetch("/signin",{
  //     method: "POST",
  //     headers: {
  //       "content-Type" : "application//json"
  //     },
  //     body: JSON.stringify({
  //       UserName,Email,Password
  //     })
  //   });
  //   const resp = await res.json();
  //   if(resp.status===422)
  //   {
  //     window.alert("Invalid registeration");
  //     console.log("Invalid registeration");
  //   }
  //   else
  //   {
  //     window.alert("Successfull registeration");
  //     console.log("Successfull registeration");
  //     navigate('/login');
  //   }
  // }
  function submit(e) {
    e.preventDefault();
    Axios.post(url,{
      UserName: data.UserName,
      Email: data.Email,
      Password: data.Password
    })
    .then(res=>{
      console.log(res.data);
    })
  }
  return (
    <>
      <form  onSubmit={(e)=>submit(e)} >
        <div className='signin-form'>
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
