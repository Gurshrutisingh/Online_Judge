import React from 'react'
import '../App.css'
import Submitted from '../components/Submitted';
import { verdicts } from '../data';
function Submissions() {
    const hed="</>";
  return (
      <>
      <h2 className='submit-heading'>Submissions{hed}</h2>
      {verdicts.map((item)=>(
            <Submitted  item={item} key={item.data}/>
        ))}
      </>
  )
}

export default Submissions
