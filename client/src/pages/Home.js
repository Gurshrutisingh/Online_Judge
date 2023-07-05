import React, { useState } from 'react'
import { useEffect } from 'react';
import '../App.css';
import Cart from '../components/Cart';
import { probs } from '../data';
import { useHistory } from "react-router-dom";
import Login from './Login';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useAuth } from '../context/UserContext';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
function Home() {
    const hed="</>";
    const navigate = useNavigate();
    const navigateToLogin = () => {
      // 👇️ navigate to /contacts
      navigate('/login');
    };
  
    const navigateSignin = () => {
      // 👇️ navigate to /
      navigate('/signin');
    };
    const {authUser,setAuthUser,isLogged,setisLogged}=useAuth();
    const [data,setData]=useState();
    async function getData(){
      const response=await fetch("http://localhost:9000")
      const result=await response.json();
      if(!response.ok){
          console.log(result.error);
        }
      if(response.ok){
          console.log(result);
          setData(result);
      }
  }
  useEffect(()=>{
      getData();
  },[])
    const handleLogout = () => {
      setAuthUser("");
      setisLogged(false);
      localStorage.clear();
    };
    useEffect(() => {
      const loggedInUser1 = localStorage.getItem("token");
      const loggedInUser2 = localStorage.getItem("user");
      if (loggedInUser1) {
        setAuthUser(loggedInUser2);
      setisLogged(true);
      }
    }, []);
  return (
    <>
      <div className='Nav'>
      <h3 className='prob-heading'><LocalFireDepartmentIcon/>CodeGuru.io</h3>
      <h3 className='prob-heading'>Problems{hed}</h3>
      {isLogged?
        <div>
        <span className='userName'>{authUser}</span>
        <button className='log-in' onClick={handleLogout}>Log out</button></div>:
       <div>
        <button className='log-in' onClick={navigateToLogin}>Log in</button>
        <button className='sign-in' onClick={navigateSignin}>Sign in</button>
       </div>
      }
      </div>
        <div className='set'>
          {data?.map((item)=>(
            <Cart  item={item} key={item._id}/>
        ))}
      </div>
      {isLogged&&
      <button onClick={()=>{navigate('/add')}} className='btn-form' id='contri'>+</button>
      }
    </>
  )
}

export default Home
