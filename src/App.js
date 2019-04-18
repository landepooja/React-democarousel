import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
class App extends Component {
  render() {
    return (
      <div className="carousel"><Carousel /></div>
    );
  }
}

export default App;
