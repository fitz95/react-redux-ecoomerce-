import React from 'react'
import { useParams } from 'react-router';
import DATA from '../Data';
import {useState} from 'react'


const ProductDetail = () => {
    // passing a product id which is pass from the product page 

    const [cartBtn, setCartBtn] = useState('Add to Cart')

    const proid= useParams();
    console.log(proid.id)
    // eslint-disable-next-line
    const proDetail = DATA.filter(x=> x.id == proid.id)
    const product = proDetail[0];
    console.log(product)

    const handleCart = (product)=>{
        // eslint-disable-next-line
        if(cartBtn=='Add to Cart'){
            setCartBtn("Remove from Cart")
        }
        else{
            setCartBtn('Add to Cart')
        }

    }

  return (
    <>
    <div className='container my-5 py-3'>
        <div className='row'>
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <img src={product.img} alt={product.title} height='400px'/>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className='display-5 fw-bold'>{product.title}</h1>
                <hr/>
                <h2 className='my-4'>${product.price}</h2>
                <p className='lead'>{product.desc}</p>
                <button onClick={()=>{handleCart(product)}} className="btn btn-outline-primary"> {cartBtn}</button>
            </div>
        </div>
    </div>
    <h1>{proid.title}</h1>
    </>
  )
}

export default ProductDetail