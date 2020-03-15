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
import {auth} from './Firebase/firebase.utils'
// const signed = true
// console.log(auth.currentUser);
// if(auth.currentUser){
//   console.log("User Active");
  
// }


function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <Service />
       <Easy />
       <Ab />
       <Product />
       <Team />
       <Footer />
    </div>
  );
}

export default App;
