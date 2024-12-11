import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./commponents/navbar"; // Pastikan nama folder benar
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
        Komentar rute berikut karena komponennya tidak diimpor
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/harga" element={<Harga />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/news" element={<News />} />
        */}
      </Routes>
    </Router>
  );
}

export default App;
