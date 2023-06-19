import React from 'react'
import '../App.css';

function Signin() {
  return (
    <>
      <form action='/signin' method='post'>
        <div className='signin-form'>
          <h1>Sign in</h1>
          <input type='text' className='input-form' placeholder='UserName'></input>
          <input type='email' className='input-form' placeholder='Email'></input>
          <input type='text' className='input-form' placeholder='Password'></input>
          <button type='submit' className='btn-form'>Sign in</button>
        </div>
      </form>
    </>
  )
}

export default Signin
