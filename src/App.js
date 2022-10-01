import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
