import React from 'react'
import Products from './Products'

export default function Home() {
  return (
    <div className='home'>
      <div className="card text-bg-dark text-white border-0">
        <img src="/assets/bg.jpg" className="card-img" alt="background" height="600px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center" >
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 fst-italic ">New Arrivals</h5>
            <p className="card-text lead fs-2 fst-italic text-muted fw-bold ">Check out all the trending items.</p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  )
}
