
import './App.css'
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Badge from './Components/Badge/Badge';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Badge/>
    </div>
  );
};

export default App;

