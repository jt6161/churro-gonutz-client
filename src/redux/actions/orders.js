export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS'
export const FETCH_ORDERS_FAILED = 'FETCH_ORDERS_FAILED'

export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS'
export const ADD_ORDER_FAILED = 'ADD_ORDER_FAILED'

const BASE_URL = `http://localhost:8000/`

export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      let response - await fetch(`${BASE_URL}/orders`)
      let orders = await response.json()
      dispatch({
        type: FETCH_ORDERS_SUCCESS,
        payload: orders
      })
    } catch(error) {
      dispatch({
        type: FETCH_ORDERS_FAILED,
        payload: error
      })
    }
  }
}

export const addOrder = newOrder => {
  return async dispatch => {
    try {
      let response - await fetch(`${BASE_URL}/orders`, {
        method: 'post',
        body: JSON.stringify(newOrder),
        headers: {
          'content-type': 'application/json'
        },
      })
      let addedOrder = await response.json()
      dispatch({
        type: ADD_ORDER_SUCCESS,
        payload: addedOrder
      })
    } catch(error) {
      dispatch({
        type: ADD_ORDER_FAILED,
        payload: error
      })
    }
  }
}
