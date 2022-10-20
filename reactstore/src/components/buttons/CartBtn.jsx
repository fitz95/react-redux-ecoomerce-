import React from 'react'
import { NavLink } from 'react-router-dom'

const CartBtn = () => {
  return (
    <>
    <NavLink className='btn btn-outline-primary ms-2' to='/' >
        <span className='fa fa-shopping-cart me-1'>Cart</span>
    </NavLink>
    </>
  )
}

export default CartBtn