import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./commponents/navbar"; // Pastikan Navbar diimpor

// Komponen Halaman (Page)
const Home = () => <h1>Welcome to Home</h1>;
const AboutUs = () => <h1>About Us</h1>;
const Products = () => <h1>Products</h1>;
const Workshop = () => <h1>Workshop</h1>;
const Harga = () => <h1>Harga</h1>;
const Booking = () => <h1>Booking</h1>;
const News = () => <h1>News</h1>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/harga" element={<Harga />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
