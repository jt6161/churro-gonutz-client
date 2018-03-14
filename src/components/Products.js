import React from 'react';
import Product from './Product'
import { connect } from 'react-redux'
import { CardDeck } from 'reactstrap'

const Products = (props) => {
  if (props.products[1]) {
    let populatedProducts = props.products.map(product => {
      // product_id === product.id[0]
      // product = props.products.filter(product => product_id === product.id[0])
      return product
    })
    console.log('pop', populatedProducts)
  }
  let bigList = props.products.map(product => <Products key={product.id} product={product}/>)
  return (<div className="container">
    <h1>Churro Gonutz Products</h1>
    <CardDeck>
      {bigList}
    </CardDeck>
  </div>)
}

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps, null)(Products);
