import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import register from '../assets/register.jpg'

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/home')
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {/* Left Column for Image */}
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src={register} alt="Descriptive Alt Text" className="img-fluid w-50" />
                </div>

                {/* Right Column for Form */}
                <div className="col-12 col-md-6 border p-5 shadow-lg">
                    <h2 className="fst-italic text-center">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-dark">
                                <i className="fa fa-user-plus me-2"></i>Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
