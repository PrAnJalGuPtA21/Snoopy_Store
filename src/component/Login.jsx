import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import login from '../assets/login.jpg';

const AuthForm = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    const handleClick = () => {
        setIsLogin(false);
        navigate('/register');
    }

    const handleSummit = (e) => {
        e.preventDefault();
        navigate("/home")
    }

    const handleRegister = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container ">
            <div className="row justify-content-center mt-5">

                {/* Left Column for Image */}
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src={login} alt="Login Image" className="img-fluid" />
                </div>

                {/* Right Column for Content */}
                <div className="col-12 col-md-6">
                    <div className="card mt-5">
                        <div className="card-body p-5 shadow-lg">
                            {isLogin ? (
                                <div className="login ">
                                    <h3 className="fst-italic text-center">Login</h3>
                                    <input type="text" className="form-control mb-2" placeholder="Username" />
                                    <input type="password" className="form-control mb-2" placeholder="Password" />
                                    <div className="d-flex justify-content-center mt-3">    
                                        <button className="btn btn-success " onClick={handleSummit}><i className = "fa fa-sign-in me-3"></i>Login</button>
                                    </div>
                                    <p className="text-center mt-2">Don't have an account? <span onClick={handleClick} className="switch-text">Register</span></p>
                                </div>

                            ) : (
                                <div className="register">
                                    <h3 className="text-center">Register</h3>
                                    <input type="text" className="form-control mb-2" placeholder="Username" />
                                    <input type="password" className="form-control mb-2" placeholder="Password" />
                                    <button className="btn btn-primary btn-block" onClick={handleRegister}>Register</button>
                                    <p className="text-center mt-2">Already have an account? <span onClick={() => setIsLogin(true)} className="switch-text">Login</span></p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;
