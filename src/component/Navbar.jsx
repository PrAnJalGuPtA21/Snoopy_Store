import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = () => {
    const state = useSelector((state) => state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-lg p-3 mb-1 bg-white rounded">
                <div className="container">
                    <NavLink className="navbar-brand fw-bolder fs-3 fst-italic  " to="/">Snoopy     Store</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="button">
                            <NavLink to="/" className="btn btn-danger">
                            <i class="fa fa-power-off me-2 "></i>Log Out</NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2 shadow-lg rounded">
                                <i className="fa fa-shopping-cart me-2"></i>Cart ({state.length})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
