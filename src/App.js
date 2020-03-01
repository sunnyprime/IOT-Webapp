import React from 'react';
import './App.css';
import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import Service from './Pages/Service';
import Footer from './Pages/Footer';
import Product from './Pages/Product';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <Service />
       <Product />
       <Footer />
    </div>
  );
}

export default App;
