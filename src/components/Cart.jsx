import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
 import { deleteItem } from '../redux/actions/index';
 

const Cart = () => {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()
    const handleClose =  (item)=> {
        dispatch(deleteItem(item))
    }
    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key ={cartItem.id} >
                <div className="container py-4">
                    <button onClick={()=> handleClose(cartItem)} className='btn-close float-end' aria-label='Close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={process.env.PUBLIC_URL + cartItem.img} alt ={cartItem.title} height= '200px' width ='180px'></img>
                        </div>
                    <div className="col-md-4">
                        <h3>{cartItem.title}</h3>
                        <p className='lead fw-bold'>${cartItem.price}</p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
    const emptyCart = () => 
    {return(
        <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
        </div>
    )
    }
    const button = () => 
    {return(
        <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <NavLink to='/checkOut' className='btn btn-outline-primary' > Proceed to Checkout</NavLink>
                    </div>
                </div>
        </div>
    )
    }
    
    
  return (
    <> 
    {state.length === 0 && emptyCart()}
    {state.length !== 0 && state.map(cartItems) }
    {state.length !== 0 && button() }
   
    </>
  )
}

export default Cart