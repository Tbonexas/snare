import React from 'react'
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './containers/AboutUs';


function App() {
  return (
    
    <Router>
        <div className="App">
        <Header />
        <Hero />
        <Route path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
      </div>

    </Router>
 
  );
}

export default App;
