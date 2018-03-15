import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

const Order = (props) => {

console.log("order", props);

  return <div className="container">
    <Card>
      <CardBody>
        <CardTitle>Order number: {props.order.id}</CardTitle>
        <CardTitle>Name: {props.order.cust_name}</CardTitle>
      </CardBody>
    </Card>
  </div>
}

export default Order;
