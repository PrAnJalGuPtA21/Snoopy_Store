import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Entry.css';
import entry from '../assets/entry.jpg';
import { useNavigate } from 'react-router-dom';

function Entry() {
    const navigate = useNavigate();

const handleRegis =()=>{
    navigate('/register');
}

const handleLogin=()=>{
    navigate('/login');
}


    return (
        <div className="container-fluid h-100 ">
            <div className="row h-100">

                {/* Left Column for Image */}
                <div className="col-12 col-md-6 p-3 d-flex align-items-center justify-content-center">
                    <img src={entry} alt="Descriptive Alt Text" className="img-full-height" />
                </div>

                {/* Right Column for Content */}
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div className="text-center">
                        <div className="mb-3 ">
                            <h2 className="head">Welcome to <span className="heading">Snoopy Store</span></h2>
                        </div>
                        <div className="regis d-flex flex-column flex-md-row justify-content-center align-items-center mb-3 ">
                            <p className="me-md-3 mb-3 mb-md-0">New Here? Feel free to join our community 😍</p>
                            <button onClick={handleRegis} className="btn btn-outline-warning">Register</button>
                        </div>
                        <div className="log d-flex flex-column flex-md-row justify-content-center align-items-center mt-4">
                            <p className="me-md-3 mb-3 mb-md-0">Already Registered..😏</p>
                            <button onClick={handleLogin}className="btn btn-outline-success ">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entry;
