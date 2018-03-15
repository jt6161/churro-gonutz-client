import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Product = (props) => {

console.log("product", props);

  return <div className="container">
      <Card>
        <CardImg top width="100%" src={props.product.img_url} />
        <CardBody>
          <CardTitle>Name: {props.product.name}</CardTitle>
          <CardSubtitle>Price: {props.product.price}</CardSubtitle>
          <CardText>Description: {props.product.description}</CardText>
          <Button color="primary">Add to Cart</Button>
        </CardBody>
      </Card>
    </div>
}

export default Product;
