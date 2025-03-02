import React from 'react';
import Navbar from '../commponents/navbar'; // Path ke komponen Navbar
import "./pages.css"; // Pastikan file CSS ini terhubung dengan benar

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>SELAMAT DATANG DI</h1>
          <p>DCH MOTOCLEAN</p>
        </div>
      </div>

      {/* Products Section */}
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

      {/* About Us Section */}
      <div className="about-us">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            DCH Motoclean adalah perusahaan yang berfokus pada solusi 
            perawatan kendaraan dengan produk berkualitas tinggi. Kami 
            berkomitmen untuk memberikan pengalaman terbaik bagi pelanggan 
            dalam menjaga kendaraan mereka tetap bersih dan terawat.
          </p>
        </div>
        <div className="about-image">
          <img src="https://via.placeholder.com/400x250" alt="About Us" />
        </div>
      </div>

    </div>
  );
};

export default Home;
