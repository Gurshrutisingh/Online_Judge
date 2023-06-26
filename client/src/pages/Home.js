import React from 'react'
import { useEffect } from 'react';
import '../App.css';
import Cart from '../components/Cart';
import { probs } from '../data';
import { useHistory } from "react-router-dom";
import Login from './Login';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useAuth } from '../context/UserContext';

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
      <h1 className='prob-heading'>Problems{hed}</h1>
      {isLogged?
        <div>
        <h3>{authUser}</h3>
        <button className='log-in' onClick={handleLogout}>Log out</button></div>:
       <div>
        <button className='log-in' onClick={navigateToLogin}>Log in</button>
        <button className='sign-in' onClick={navigateSignin}>Sign in</button>
       </div>
      }
      </div>
      { isLogged&&
        <div className='set'>
          {probs.map((item)=>(
            <Cart  item={item} key={item.data}/>
        ))}
      </div>
      }
    </>
  )
}

export default Home
