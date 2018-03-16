import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
}
  from 'reactstrap';

const Order = (props) => {
  let orderedItemsList = props.order.ordered_items.map(item => {
    return (
      <div>{item.name}</div>
    )
  })
    return <div className="container">
            <Col>
              <Card>
                <CardBody>
                  <CardTitle>Order number: {props.order.order_details.id}</CardTitle>
                  <CardTitle>
                    Customer Name: {props.order.order_details.cust_name}
                  </CardTitle>
                  <CardSubtitle>
                    Ordered: {orderedItemsList}
                  </CardSubtitle>
                  <hr className="my-2"/>
                  <Button size="sm" href="/Products" color="primary">Add Product</Button>{' '}
                  <Button size="sm" color="warning">Remove Product</Button>{' '}
                </CardBody>
              </Card>
            </Col>
          </div>;
}

export default Order;
