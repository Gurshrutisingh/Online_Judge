import React from 'react'
import '../App.css';
import Cart from '../components/Cart';
import { probs } from '../data';

function Home() {
    const hed="</>";
  return (
    <>
      <div className='Nav'>
      <h1 className='prob-heading'>Problems{hed}</h1>
      <button className='log-in'>Log In</button>
      <button className='sign-in'>Sign In</button>
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
