import React, { useState } from 'react'
import '../App.css'
import {useLocation} from 'react-router-dom';

function Code() {
    const hed="</>";
    const location = useLocation();
    const [userCode,setuserCode]=useState();
    const [userOutput,setuserOutput]=useState();
  const handleChange =(e)=>{
    e.preventDefault();
    setuserCode(e.target.value);
    console.log(e.target.value);
  }
  const handleSubmit =async (e)=>{
    e.preventDefault();
    let content={language: "cpp",code: userCode};
    const response=await fetch("http://localhost:9000/code",{
      method:"POST",
      body: JSON.stringify(content),
      headers:{
        "Content-Type": "application/json",
      }
    });
    const result=await response.json();
    //console.log(result.auth);
    if(!response.ok){
      console.log(result.error);
    }
    if(response.ok){
      console.log(result);
      setuserOutput(result);
    }
  }
  return (
    <>
      <div className='total-code'>
      <div className='side-bar'>
        <div className='side-nav'>Online_Judge{hed}</div>
        <div className='side-body'>
           <button className='side-ele'>Home</button>
            <button className='side-ele'>Submissions</button>
        </div>
      </div>
      <div className="container">
      <form onSubmit={handleSubmit} className="container-1">
        <div className="inputText">
        <h4>{location.state.head}</h4>
        <h6>{location.state.name}</h6>
        <label className="dropDown">Choose a language:</label>
        <select >
        <option value="C++">C++</option>
        <option value="C">C</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        </select>
        <textarea className="code" placeholder="Code here..." name="code" value={userCode} onChange={handleChange}></textarea>
        </div>
        <div className="otherComp">
        <h6>Test Case:</h6>
        <h6>Input:</h6>
        <h6>{location.state.input}</h6>
        <h6>Output:</h6>
        <h6>{location.state.output}</h6>
          <textarea type="text" className="input" placeholder="Input.."></textarea>
          <div type="text" className="output" placeholder="Output..">{userOutput}</div>
          <div className="btns">
             <button type="submit" className="btn-run" >Run</button>
             <button type="submit" className="btn-submit">Submit</button>
          </div>
        </div> 
      </form>
      </div>
      </div>
    </>
  )
}

export default Code


