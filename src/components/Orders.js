import React from "react"
import { connect } from "react-redux"
import { CardDeck, Card, CardColumns, Col } from "reactstrap"
import Order from './Order'

const Orders = props => {
  let orderList = props.orders.map(order => <Order key={order.id} order={order}/> )
  return (
    <div align="center">
        <CardDeck>
          <Card>{orderList}</Card>
        </CardDeck>
    </div>
  );
};

const mapStateToProps = state => ({
  orders: state.orders
})

export default connect(mapStateToProps, null)(Orders);
