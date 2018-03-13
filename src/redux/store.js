import { createStore, combineReducers, applyMiddleware } from 'redux'
import products from './reducer/products'
import orders from './reducer/orders'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ products, orders })

export default 9  => {
  return createStore(rootReducer, applyMiddleware(thunk))
}