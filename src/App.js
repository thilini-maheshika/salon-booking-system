import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Home />
      </div>
    </div>
  );
}

export default App;
