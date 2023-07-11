import React, { useEffect, useState } from 'react'
import '../App.css'
import Submitted from '../components/Submitted';
import { verdicts } from '../data';
import { useParams } from 'react-router-dom';


function Submissions() {
    const hed="</>";
    var [result,setResult]=useState();
    var [color,setColor]=useState('#D0F0C0');
    const { id }= useParams();
  async function getData(){
    const response=await fetch(`http://localhost:9000/submissions/${id}`)
     result=await response.json();
      if(!response.ok){
        console.log(result.error);
      }
      if(response.ok){
        console.log(result);
        setResult(result);
      }
}

useEffect(()=>{
  getData();
  
},[]);
  return (
      <>
      <h2 className='submit-heading'>Submissions{hed}</h2>
      <div>{result?.map((item)=>(
       <>
         <div className='problem' >
         <div className='sub-name'>{item.name}</div>
         <div className='sub-ver'>{item.verdict}</div>
         </div>
       </>
       )
         
       )}
       </div>
      
      </>
  )
}
// {verdicts.map((item)=>(
//   <Submitted  item={item} key={item.id}/>
// ))}
export default Submissions
