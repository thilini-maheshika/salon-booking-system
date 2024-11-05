import React, { useState, useEffect } from 'react';
import Banner from '../images/banner.png'
import './Home.css'

const Home = () => {

    return (
        <section id="home" className="home-section">
            <div className="home-container">
                <div className="home-text">
                    <div className="words-section">
                        <h1>Book Beauty Services with Ease</h1>
                        <p>Discover top-rated salons near you for hair, beauty, and wellness</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={Banner} alt="Shipping" className="banner-image" />
                </div>
            </div>
            <div className="searching-card">
                    <h3>Search & Find Stylists Near You</h3>
                    <div className="search-inputs">
                        <div className='input-wrapper'>
                            <input type="text" placeholder="Enter Salon" />
                            <input type="text" placeholder="Enter Your City" />
                        </div>
                        <button>Search</button>
                    </div>
                </div>
        </section>
    );
}

export default Home;