import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from  './Layout/Layout';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <div className="App-container">

      <Router>

      <Navigation />

      <Layout />

      </Router>

    </div>
  );
}

export default App;
