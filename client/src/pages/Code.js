import React from 'react'
import '../App.css'
function Code() {
    const hed="</>";
  return (
    <>
       <h1 id="heading">Online_Judge{hed}</h1>
      <form action="/">
      <div className="container">
        <div className="inputText">
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
          <textarea type="text" className="input" placeholder="Input.."></textarea>
          <textarea type="text" className="output" placeholder="Output.."></textarea>
          <div className="btns">
             <button type="submit" className="btn-run">Run</button>
             <button type="submit" className="btn-submit">Submit</button>
          </div>
        </div>
      </div>
      </form>
    </>
  )
}

export default Code


