import React from 'react'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';

import '../App.css'
function Add() {
    const [UserName,setName]=useState();
    const [Statement,setStatement]=useState();
    const [Input,setInput]=useState();
    const [Output,setOutput]=useState();
    const [InputTest,setInputTest]=useState();
    const [OutputTest,setOutputTest]=useState();
    const navigate=useNavigate();

    const handleName =(e)=>{
        e.preventDefault();
        setName(e.target.value);
        console.log(e.target.value);
      }
    const handleStatement =(e)=>{
        e.preventDefault();
        setStatement(e.target.value);
        console.log(e.target.value);
      }
    const handleInput =(e)=>{
        e.preventDefault();
        setInput(e.target.value);
        console.log(e.target.value);
      }
    const handleOutput =(e)=>{
        e.preventDefault();
        setOutput(e.target.value);
        console.log(e.target.value);
      }
    const handleInputTest =(e)=>{
        e.preventDefault();
        setInputTest(e.target.value);
        console.log(e.target.value);
      }
    const handleOutputTest =(e)=>{
        e.preventDefault();
        setOutputTest(e.target.value);
        console.log(e.target.value);
      }
    const handleSubmit =async(e)=>{
        e.preventDefault();
    const addUser= {UserName,Statement,Input,Output,InputTest,OutputTest};
    const response=await fetch("http://localhost:9000/add",{
      method:"POST",
      body: JSON.stringify(addUser),
      headers:{
        "Content-Type": "application/json",
      }
    });
  const result=await response.json();
    if(!response.ok){
      console.log(result.error);
    }
    if(response.ok){
      console.log(result);
      navigate('/');
    }
    }
  return (
    <>
      <form className='addForm' onSubmit={handleSubmit}>
      <h1>Add Problem</h1>
      <div className="mb-3">
  <label className="form-label">Name</label>
  <input className="form-control" type="text" value={UserName} onChange={handleName}/>
</div>
<div className="mb-3">
  <label className="form-label">Statement</label>
  <textarea className="form-control" value={Statement} onChange={handleStatement}></textarea>
</div>
<div className="mb-3">
  <label className="form-label">Input (How input should be taken)</label>
  <textarea className="form-control" type="text" value={Input} onChange={handleInput}></textarea>
</div>
<div className="mb-3">
  <label className="form-label">Output (How Output should be taken)</label>
  <textarea className="form-control" type="text" value={Output} onChange={handleOutput}></textarea>
</div>
<div className="mb-3">
  <label className="form-label">Input TestCase (First line no of testCast then write other testCase):</label>
  <textarea className="form-control" type="text" value={InputTest} onChange={handleInputTest}></textarea>
</div>
<div className="mb-3">
  <label className="form-label">Output (write output for each testCase with a gap)</label>
  <textarea className="form-control" type="text" value={OutputTest} onChange={handleOutputTest}></textarea>
</div>
    <button className="btn-form" type='submit'>Add</button>
      </form>
    </>
  )
}

export default Add
