import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
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
        alert('Form submitted!');
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center fst-italic ">Contact Us</h2>
            <div className="row justify-content-center">
                <div className="col-md-6 shadow-lg rounded">
                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-dark"><i class=" fa fa-solid fa-check me-2"></i>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
