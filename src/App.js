import React from 'react'
import './App.css'
import Home from "./components/Home"
import Header from './components/Header'
import Products from './components/Products'
import Orders from './components/Orders'


import {
  BrowserRouter as Router,
  Route,
  // Redirect
} from 'react-router-dom'

const App = () => {
    return <div className="App">
        <Router>
          <div>
            <Header />
            <div className="container">
              <img width="100%" alt='Churro GoNutz Logo' src='../churro_gonutz_logo.png'></img>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Products} />
                <Route path="/orders" component={Orders} />
            </div>
          </div>
        </Router>
      </div>;
}

export default App;
