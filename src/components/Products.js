import React from "react"
import { connect } from "react-redux"
import { CardDeck, Card, CardColumns, CardBody } from "reactstrap"
import Product from './Product'

const Products = props => {
  let productList = props.products.map(product => <Product key={product.id} product={product}/> )
  return <CardColumns>
          <CardDeck>
            <Card>
              <CardBody>{productList}</CardBody>
            </Card>
          </CardDeck>
        </CardColumns>
};

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps, null)(Products);
