import React from 'react'
import '../App.css';
import Cart from '../components/Cart';
import { probs } from '../data';
import { useHistory } from "react-router-dom";
import Login from './Login';
import {Routes, Route, useNavigate} from 'react-router-dom';

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
  return (
    <>
      <div className='Nav'>
      <h1 className='prob-heading'>Problems{hed}</h1>
      <button className='log-in' onClick={navigateToLogin}>Log in</button>
      <button className='sign-in' onClick={navigateSignin}>Sign in</button>
      </div>
      <div className='set'>
          {probs.map((item)=>(
            <Cart  item={item} key={item.data}/>
        ))}
      </div>
    </>
  )
}

export default Home
