import React from 'react'
import '../App.css'
import {useLocation} from 'react-router-dom';

function Code() {
    const hed="</>";
    const location = useLocation();
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
      <form action="/"className="container-1">
        <div className="inputText">
        <h4>{location.state.name}</h4>
        <label className="dropDown">Choose a language:</label>
        <select >
        <option value="C++">C++</option>
        <option value="C">C</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        </select>
        <textarea className="code" placeholder="Code here..."></textarea>
        </div>
        <div className="otherComp">
        <h5>Test Case:</h5>
        <h5>{location.state.input}</h5>
        <h5>{location.state.output}</h5>
          <textarea type="text" className="input" placeholder="Input.."></textarea>
          <textarea type="text" className="output" placeholder="Output.."></textarea>
          <div className="btns">
             <button type="submit" className="btn-run">Run</button>
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


