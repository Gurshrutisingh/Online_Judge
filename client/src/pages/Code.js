import React, {  useState } from 'react'
import '../App.css'
import {useLocation,useNavigate} from 'react-router-dom';


function Code() {
    const hed="</>";
    const location = useLocation();
    const [userCode,setuserCode]=useState();
    const [userTestcases,setuserTestcases]=useState();
    const [userOutput,setuserOutput]=useState();
    const [userButton,setSubmitButton]=useState();
    const id=location.state.id;
    const navigator=useNavigate();
  const handleChange =(e)=>{
    e.preventDefault();
    setuserCode(e.target.value);
    console.log(e.target.value);
  }
  const handleChangeTest=(e)=>{
    e.preventDefault();
    setuserTestcases(e.target.value);
    console.log(e.target.value);
  }

  const handleSubmit =async (e)=>{
    e.preventDefault();
    let content;
    if(userButton==="run"){
     content={language: "cpp",code: userCode,input: userTestcases,type: userButton};
    }
    else{
      console.log(id);
      content={language: "cpp",code: userCode,input: id,type: userButton};
    }
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
      setuserOutput("Check for error");
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
           <button className='side-ele' onClick={()=>navigator('/')}>Home</button>
            <button className='side-ele' onClick={()=>navigator('/submissions')}>Submissions</button>
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
          <textarea type="text" className="input" placeholder="Input.." value={userTestcases} onChange={handleChangeTest}></textarea>
          <div type="text" className="output" placeholder="Output..">{userOutput}</div>
          <div className="btns">
             <button type="submit" className="btn-run" onClick={()=>setSubmitButton('run')}>Run</button>
             <button type="submit" className="btn-submit" onClick={()=>setSubmitButton('submit')}>Submit</button>
          </div>
        </div> 
      </form>
      </div>
      </div>
    </>
  )
}

export default Code


