
import './App.css'
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Badge from './Components/Badge/Badge';
import Footer from './Components/Footer/Footer';
import Steps from './Components/Steps/Steps';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Badge/>
      <Steps/>
      <Footer/>
    </div>
  );
};

export default App;

