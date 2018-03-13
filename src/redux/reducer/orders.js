import {
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILED,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILED
} from '../actions/orders'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return [../action.payload]
    case FETCH_ORDERS_FAILED:
      return action.payload // this is the error
    case ADD_ORDER_SUCCESS:
      return [..state, action.payload]
    case ADD_ORDER_FAILED:
      return action.payload // this is the error
    default:
      return state
  }
}
