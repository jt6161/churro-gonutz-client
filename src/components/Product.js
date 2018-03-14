import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const Product = ({product}) => {
  <Card body inverse color="primary">
   <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
   <CardBody>
     <CardTitle>{product.name}</CardTitle>
     <CardSubtitle>{product.price}</CardSubtitle>
     <CardText>{product.description}</CardText>
     <Button>Add to Cart</Button>
   </CardBody>
 </Card>
}

export default Product;
