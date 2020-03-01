import React from 'react';
import './App.css';
import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import Service from './Pages/Service';
import Footer from './Pages/Footer';
import Product from './Pages/Product';
import Team from './Pages/Team';
import Easy from './Pages/Easy';
import Ab from './Pages/Ab';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <Service />
       <Easy />
       <Ab />
       {/* <Team /> */}
       <Product />
       {/* <Team /> */}
       <Footer />
    </div>
  );
}

export default App;
