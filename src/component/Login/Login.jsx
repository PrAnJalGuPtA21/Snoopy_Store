import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    const handleClick =()=>{
        setIsLogin(false);
        navigate('/register');
    }

    const handleSummit =()=>{
        navigate("/home")
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body p-5 shadow-lg">
                            {isLogin ? (
                                <div className="login ">
                                    <h3 className="fst-italic ">Login</h3>
                                    <input type="text" className="form-control mb-2" placeholder="Username" />
                                    <input type="password" className="form-control mb-2" placeholder="Password" />
                                    <button className="btn btn-success btn-block" onClick={handleSummit}>Login</button>
                                    <p className="text-center mt-2">Don't have an account? <span onClick={handleClick} className="switch-text">Register</span></p>
                                </div>
                            ) : (
                                <div className="register">
                                    <h3>Register</h3>
                                    <input type="text" className="form-control mb-2" placeholder="Username" />
                                    <input type="password" className="form-control mb-2" placeholder="Password" />
                                    <button className="btn btn-primary btn-block">Register</button>
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
