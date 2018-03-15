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
  let orderedItemsList = props.order.ordered_items.map(item => {
    return (
      <div>{item.name}</div>
    )
  })
  return <div className="container">
          <Card>
            <CardBody>
              <CardTitle>Order number: {props.order.order_details.id}</CardTitle>
              <CardTitle>
                Customer Name: {props.order.order_details.cust_name}
              </CardTitle>
              <CardTitle>
                Ordered Products: {orderedItemsList}
              </CardTitle>
            </CardBody>
          </Card>
        </div>;
}
export default Order;
