import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Entry.css';
import entry from '../assets/entry.jpg';

function Entry() {
    return (
        <div className="container-fluid h-100">
            <div className="row h-100">

                {/* Left Column for Image */}
                <div className="col-md-6 p-3">
                    <img src={entry} alt="Descriptive Alt Text" className="img-full-height" />
                </div>

                {/* Right Column for Content */}
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="text-center">
                        <div className="main d-flex justify-content-center mb-5 ">
                            <h2>Welcome to <span className="heading">Snoopy Store</span></h2>
                        </div>
                        <p>If you have an account, please login. Otherwise, feel free to register and join our community.</p>
                        <button className="btn btn-primary mb-2">Login</button>
                        <button className="btn btn-secondary">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entry;
