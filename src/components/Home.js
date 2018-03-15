import React from 'react'
import Gallery from './Gallery'
import { Jumbotron, Button } from 'reactstrap';

const Home = () => {
  return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Go Nutz for Churros!</h1>
          <p className="lead">Our mission is to ensure that every guest leaves happy and that we add great taste and flavor to their experience.</p>
          <hr className="my-2" />
          <p className="lead">We offer churro donuts smothered in cinnamon and sugar, topped with a scoop of ice cream and offer a multitude of toppings. We can change the toppings to compliment the event or theme of you choosing.</p>
          <p className="lead">
            <Button href="/Products" color="primary">Products</Button>
          </p>
        </Jumbotron>
       
          {/* {Gallery} */}
       
      </div>
  )
}

export default Home;
