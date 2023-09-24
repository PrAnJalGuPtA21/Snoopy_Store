import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  fashion from '../assets/fashion.jpg';  
import  support from '../assets/support.jpg';  
import  tech from '../assets/tech.jpg'; 
import  delivery from '../assets/delivery.jpg'; 
import './About.css' 

const About = () => {
    return (
        <div className="container mt-3">
            <h1 className="d-flex  justify-content-center mb-3 ">Snoopy Store</h1>
            <hr></hr>
            <h2>About Our E-Commerce Platform</h2>
            <p>Welcome to Snoopy Store, the epitome of shopping convenience and product variety. Founded in 2023, our e-commerce platform has been bridging the gap between consumers and global brands, delivering exceptional value and experiences straight to doorsteps.</p>

            <div className="row mt-5 m-5">
                <div className="col-md-4 w-25 p-2">
                    <img src={tech} alt="Tech products" className="img-fluid rounded about_image " />
                    <p className="mt-4">From the latest tech gadgets to everyday items, explore our diverse product range.We work directly with top manufacturers and authorized distributors to ensure that our inventory is 100% genuine and of the highest quality.</p>
                </div>
                <div className="col-md-4 w-25 p-2">
                    <img src={fashion} alt="Fashion brands" className="img-fluid rounded about_image" />
                    <p className="mt-4">Discover top fashion brands and trends exclusively on our platform. From the latest tech gadgets, premium fashion brands, home essentials, to everyday grocery items, we provide an exhaustive range of products to cater to every whim and need</p>
                </div>
                <div className="col-md-4 w-25 p-2">
                    <img src={support} alt="Customer support" className="img-fluid rounded about_image" />
                    <p className="mt-4">Our dedicated support team is always ready to assist you.Our 24/7 customer support is always ready to assist with any queries. Moreover, our easy return and refund policies ensure you shop with peace of mind.</p>
                </div>
                <div className="col-md-4 w-25 p-2">
                    <img src={delivery} alt="Customer support" className="img-fluid rounded about_image" />
                    <p className="mt-4">Assured fast Delivery from our platform . Our logistics network spans across India, ensuring timely delivery. Plus, with real-time tracking, you know exactly when your purchase will arrive.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
