import React from 'react'
import '../App.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Cart = ({item}) => {
  return (
    <>
      <div className='problem'>
      <div className='prob-name'>{item.title}</div>
      <div  className='prob-arrow'><ChevronRightIcon/></div>
      </div>
    </>
  )
}

export default Cart
