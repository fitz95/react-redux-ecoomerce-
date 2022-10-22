import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
  // we get the state of the add items 
  // write the name of the file not the function 
  const state = useSelector((state)=> state.addItem)
  return (
    <>
    <NavLink className='btn btn-outline-primary ms-2' to='/cart' >
        <span className='fa fa-shopping-cart me-1'>Cart ({state.length})</span>
    </NavLink>
    </>
  )
}

export default CartBtn