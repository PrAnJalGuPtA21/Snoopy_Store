import React, { useState } from 'react';
import upi from '../assets/upi.jpg';
import { useNavigate } from 'react-router-dom';
import creditcard from '../assets/creditcard.webp';

export default function Payment() {
    const navigate = useNavigate();
    const [paymentData, setPaymentData] = useState({
        nameOnCard: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',
        upiId: ''
    });

    const handleChange = (e) => {
        setPaymentData({
            ...paymentData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payment data submitted:', paymentData);
    };

    const handleClick = () => {
        navigate('/cart');  
    };
    

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <div className="col-md-6">
                <h2 className="text-center mb-4">Payment Method</h2>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center mb-3">
                        <img src={creditcard} alt="Credit Card" width="150" className="me-3" height="100" />
                        <div className="w-100">
                            <div className="mb-3">
                                <label className="form-label">Name on Card</label>
                                <input type="text" className="form-control" name="nameOnCard" value={paymentData.nameOnCard} onChange={handleChange} required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Card Number</label>
                                <input type="text" className="form-control" name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} required />
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Expiry Month</label>
                                    <input type="number" min="1" max="12" className="form-control" name="expiryMonth" value={paymentData.expiryMonth} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Expiry Year</label>
                                    <input type="number" min="2023" className="form-control" name="expiryYear" value={paymentData.expiryYear} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">CVV</label>
                                <input type="number" className="form-control" name="cvv" value={paymentData.cvv} onChange={handleChange} required />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center mb-3 mt-4">
                        <img src={upi} alt="UPI" width="150" height="100" className="me-5" />
                        <div className="w-100">
                            <label className="form-label">UPI ID</label>
                            <input
                                type="text"
                                className="form-control"
                                name="upiId"
                                value={paymentData.upiId}
                                onChange={handleChange}
                                placeholder="example@upi"
                                required
                            />
                        </div>                    </div>

                    <div className="col-md-6 mx-auto mt-3">
                        <button type="submit" className="btn btn-success btn-block me-4 shadow-lg  ">Confirm and Pay</button>
                        <button onClick={handleClick} className="btn btn-outline-danger btn-block shadow-lg ">Back to cart</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
