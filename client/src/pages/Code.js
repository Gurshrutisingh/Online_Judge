import React from 'react'
import '../App.css'
function Code() {
    const hed="</>";
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
        <h4>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
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
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
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


