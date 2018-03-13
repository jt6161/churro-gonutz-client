import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import Header from './components/Header'
import Products from './components/Products'
import Product from './components/Product'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>client side</h1>
        {/* <Product /> */}
        <Products />
      </div>
    );
  }
}

export default App;
