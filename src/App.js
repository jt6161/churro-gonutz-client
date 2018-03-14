import React from 'react';
import './App.css';
import Header from './components/Header'
// import Products from './components/Products'
import Product from './components/Product'

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

export const App = () => { 
    return <div className="App">
        <Router>
          <div>
            <Header />
            <h1>Product</h1>
            <div className="container">
              {/* <Route exact path="/" component={Home} />
              <Route path="/products" component={Products} /> */}
              <Route path="/product" component={Product} />
              {/* <Route path="/cart" component={Cart} /> */}
            </div>
          </div>
        </Router>
      </div>;
}

export default App;
