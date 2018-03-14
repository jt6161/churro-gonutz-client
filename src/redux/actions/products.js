export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_FAILED = 'FETCH_PRODUCT_FAILED'

const BASE_URL = `http://localhost:8000`

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(`${BASE_URL}/products`)
      let products = await response.json()
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: products
      })
    } catch(error) {
      dispatch({
        type: FETCH_PRODUCT_FAILED,
        payload: error
      })
    }
  }
}
