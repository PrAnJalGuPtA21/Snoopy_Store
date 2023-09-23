import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Shipping() {    
    const navigate = useNavigate();
    const [shippingData, setShippingData] = useState({
        fullName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    const handleChange = (e) => {
        setShippingData({
            ...shippingData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Shipping data submitted:', shippingData);
        
        navigate('/payment');
    };

    return (
        <div className="container py-3 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <div className="col-md-6">
                <h2 className="text-center mb-4 ">Shipping Details</h2>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" name="fullName" value={shippingData.fullName} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" name="address" value={shippingData.address} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" name="city" value={shippingData.city} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">State</label>
                        <input type="text" className="form-control" name="state" value={shippingData.state} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Zip Code</label>
                        <input type="text" className="form-control" name="zip" value={shippingData.zip} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Country</label>
                        <input type="text" className="form-control" name="country" value={shippingData.country} onChange={handleChange} required />
                    </div>

                    <button type="submit" className="btn btn-outline-success  btn-block">Proceed to Payment</button>
                </form>
            </div>
        </div>
        
    );
}
