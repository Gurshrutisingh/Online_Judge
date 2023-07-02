import React from 'react'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';

import '../App.css'
function Add() {
    const [UserName,setName]=useState();
    const [Statement,setStatement]=useState();
    const [Input,setInput]=useState();
    const [Output,setOutput]=useState();
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
    const handleSubmit =async(e)=>{
        e.preventDefault();
    const addUser= {UserName,Statement,Input,Output};
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
  <label className="form-label">Input</label>
  <textarea className="form-control" type="text" value={Input} onChange={handleInput}></textarea>
</div>
<div className="mb-3">
  <label className="form-label">Output</label>
  <textarea className="form-control" type="text" value={Output} onChange={handleOutput}></textarea>
</div>
    <button className="btn-form" type='submit'>Add</button>
      </form>
    </>
  )
}

export default Add
