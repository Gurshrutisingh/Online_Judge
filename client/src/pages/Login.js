import React from 'react'
import '../App.css';
function Login() {
  return (
    <>
      <form action='/Login' method='post'>
        <div className='signin-form'>
          <h1>Log in</h1>
          <input type='text' className='input-form' placeholder='UserName'></input>
          <input type='text' className='input-form' placeholder='Password'></input>
          <button type='submit' className='btn-form'>Log in</button>
        </div>
      </form>
    </>
  )
}

export default Login
