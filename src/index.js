import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootswatch/dist/materia/bootstrap.css'
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchProducts } from './redux/actions/products'
import { fetchOrders } from './redux/actions/orders'

let newStore = store()

newStore.dispatch(fetchProducts())
newStore.dispatch(fetchOrders())

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
