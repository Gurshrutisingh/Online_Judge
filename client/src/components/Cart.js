import React from 'react'
import '../App.css';
import Code from '../pages/Code';
import { useNavigate } from 'react-router-dom';


const Cart = ({item}) => {
  const navigate = useNavigate();
  let state=item.statement;
  let inp=item.input;
  let out=item.output;
  const arro=">";
  function toCode() {
    navigate('/code', { state: { name: state ,input: inp,output: out}});
  }
  return (
    <>
      <div className='problem'>
      <div className='prob-name'>{item.name}</div>
      <button  className='prob-arrow' onClick={toCode}>{arro}</button>
      </div>
    </>
  )
}

export default Cart
