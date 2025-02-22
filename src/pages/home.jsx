import React from 'react';
import Navbar from '../commponents/navbar'; // Path ke komponen Navbar
import "./pages.css"; // Pastikan file CSS ini terhubung dengan benar

const Home = () => {
  return (
    <div>
      {/* Herro Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>SELAMAT DATANG DI</h1>
          <p>DCH MOTOCLEAN</p>
        </div>
      </div>
      {/* End Herro Banner */}

      {/* Products */}
      <div className="text-section">
        <p>Products</p>
      </div>

      {/* Cards Container */}
      <div className="cards-container">
        <div className="card">
          <img src="https://via.placeholder.com/300x200" alt="Card 1" />
          <div className="card-description">
            <p>Coating</p>
          </div>
        </div>

        <div className="card">
          <img src="https://via.placeholder.com/300x200" alt="Card 2" />
          <div className="card-description">
            <p>Power Clean</p>
          </div>
        </div>

        <div className="card">
          <img src="https://via.placeholder.com/300x200" alt="Card 3" />
          <div className="card-description">
            <p>Dressing</p>
          </div>
        </div>
      </div>
      {/* End Products */}
      
    </div>
  );
};

export default Home;
