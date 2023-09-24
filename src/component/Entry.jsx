import React from 'react';
import './Entry.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import entry from '../assets/entry.jpg';
import { useNavigate } from 'react-router-dom';

function Entry() {
    const navigate = useNavigate();

    const handleRegis = () => {
        navigate('/register');
    }

    const handleLogin = () => {
        //  localStorage.setItem('isLoggedIn', 'true');
        navigate('/login');
    }


    return (
        <div className="container-fluid h-100">
            <div className="row h-100">

                {/* Left Column for Image */}
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src={entry} alt="Descriptive Alt Text" className="img-fluid img-full-height" />
                </div>

                {/* Right Column for Content */}
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center bg-gradient">
                    <h2 className="head fw-bolder mb-5 text-center">Welcome to <span className="heading">Snoopy Store</span></h2>

                    <div className="container-fluid">
                        <div className="row mt-4">
                            {/* Registration Column */}
                            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                                <p className="text-center mb-2">New Here? Feel free to join our community 😍</p>
                                <button onClick={handleRegis} className="btn btn-outline-dark custom-btn w-50"><i className="fa fa-user-plus me-2"></i>Register</button>
                            </div>

                            {/* Login Column */}
                            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center mt-3 mt-lg-0">
                                <p className="text-center mb-2">Already Registered..😏</p>
                                <button onClick={handleLogin} className="btn btn-dark custom-btn w-50"><i className="fa fa-sign-in me-2"></i>Login</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Entry;
