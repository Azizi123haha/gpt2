import React from 'react';
import './App.css';
import Header from './components/Header';
import Pricelist from './components/Pricelist';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Pricelist />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
