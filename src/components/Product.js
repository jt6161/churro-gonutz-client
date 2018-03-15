import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardColumns } from 'reactstrap';

const Product = (props) => {

console.log("product", props);

  return <Card>
          <CardBody>
            <CardImg top width="100%" src={props.product.img_url} />
            <CardTitle>Name: {props.product.name}</CardTitle>
            <CardSubtitle>Price: {props.product.price}</CardSubtitle>
            <CardText>Description: {props.product.description}</CardText>
            <Button href="/Orders" color="primary">Add to Cart</Button>
          </CardBody>
        </Card>
}

export default Product;
