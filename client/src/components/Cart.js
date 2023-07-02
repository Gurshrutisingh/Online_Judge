import React from 'react'
import '../App.css';
import Code from '../pages/Code';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UserContext';


const Cart = ({item}) => {
  const navigate = useNavigate();
  let state=item.statement;
  let inp=item.input;
  let out=item.output;
  let head=item.name;
  let id=item._id;
  const arro=">";
  const {authUser,setAuthUser,isLogged,setisLogged}=useAuth();
  function toCode() {
    navigate('/code', { state: {head: head, name: state ,input: inp,output: out,id: id}});
  }
  return (
    <>
      <div className='problem'>
      <div className='prob-name'>{item.name}</div>
      {isLogged&&<button  className='prob-arrow' onClick={toCode}>{arro}</button>
      }
      </div>
    </>
  )
}

export default Cart
