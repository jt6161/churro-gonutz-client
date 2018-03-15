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
              <CardTitle>Order number: {props.order.order_details.id}</CardTitle>
              <CardTitle>
                Customer Name: {props.order.order_details.cust_name}
              </CardTitle>
              <CardTitle>
                Ordered Products: {props.order.order_details.ordered_items}
              </CardTitle>
            </CardBody>
          </Card>
        </div>;
}
export default Order;
