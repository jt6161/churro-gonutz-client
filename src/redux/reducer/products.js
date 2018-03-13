import { FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILED } from '../actions/products'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return [...action.payload]
    case FETCH_PRODUCT_FAILED:
      return action.payload // this is the error
    default:
      return state
  }
}
