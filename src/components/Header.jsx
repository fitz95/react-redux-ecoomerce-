import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './buttons/Login'
import SignUp from './buttons/SignUp'
import CartBtn from './buttons/CartBtn'

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid py-2">
                    <NavLink className="navbar-brand" to="/#">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">About</NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                            </li>                             
                        </ul>
                        <NavLink className="navbar-brand mx-auto fw-bold"  to="/">Software Store</NavLink>
                    <Login/>
                    <SignUp/>
                    <CartBtn/>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

export default Header