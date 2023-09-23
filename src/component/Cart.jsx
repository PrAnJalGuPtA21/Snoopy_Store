import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cart from '../assets/cart.png'

export default function Cart() {
    const cartItems = useSelector(state => state.handleCart || []);
    const dispatch = useDispatch();

    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    const handleAddItem = (product) => {
        dispatch({ type: "ADDITEM", payload: product });
    }

    const handleDeleteItem = (product) => {
        dispatch({ type: "DELITEM", payload: product });
    }

    return (
        <div className="container py-5">
            <div className="row">
                <h3 className="mb-4 fst-italic fw-bold"> Cart Summary </h3>
                <div className="col-md-8 shadow-lg rounded ">
                    {cartItems.length === 0 ? (
                        <img src={cart} alt="cart" />
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-2 ">
                                        <img src={item.image} alt={item.title} className="img-fluid rounded-start p-2" />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 p-2 d-flex flex-column justify-content-between align-items-end">
                                        <button onClick={() => handleAddItem(item)}>
                                            <i className="fa fa-solid fa-plus fa-2xs fa-flip" style={{ color: '#017e10' }}></i>
                                        </button>
                                        <span className="badge bg-secondary">{item.qty}</span>
                                        <button onClick={() => handleDeleteItem(item)}>
                                            <i class=" fa fa-solid fa-minus fa-beat" style={{ color: '#c20000' }}></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="col-md-4">
                    <div className="card border-dark shadow-lg ">
                        <div className="card-header bg-success text-white">Total Payment</div>
                        <div className="card-body">
                            <h5 className="card-title">${total.toFixed(2)}</h5>
                            <NavLink to='/shipping' className="btn btn-outline-success btn-block mt-4">Proceed to pay </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
