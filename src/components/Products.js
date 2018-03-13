import React from 'react';
import Product from './Product'
import { connect } from 'react-redux'

const Products = (props) => {
  if (props.products[1]) {
    let populatedProducts = props.products.map(product => item.product_id === product.id[0]
      item.product = props
    return item
  )}
  console.log('pop', populatedProducts)
  return (
    <div className="container">
      <h1>Churro Gonutz Products</h1>
      {bigList}
    </div>

  )
}

export default Products;
