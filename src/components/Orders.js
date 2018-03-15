import React from "react"
import { connect } from "react-redux"
import { CardDeck, Card } from "reactstrap"
import Order from './Order'

const Orders = props => {
  let orderList = props.orders.map(order => <Order key={order.id} order={order}/> )
  return (
    <CardDeck>
      <Card>{orderList}</Card>
    </CardDeck>
  );
};

const mapStateToProps = state => ({
  orders: state.orders
})

export default connect(mapStateToProps, null)(Orders);
