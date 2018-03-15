import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => {
  return <div>
      <Jumbotron>
        <h1 className="display-3">Go Nutz for Churros!</h1>
        <p className="lead">
          Our mission is to ensure that every guest leaves happy and that we
          add great taste and flavor to their experience.
        </p>
        <hr className="my-2" />
        <p className="lead">
          We offer churro donuts smothered in cinnamon and sugar, topped with
          a scoop of ice cream and offer a multitude of toppings. We can
          change the toppings to compliment the event or theme of you
          choosing.
        </p>
        <p className="lead">
          For information or questions regarding Churro GoNutz please email us at
          <email>
            churrogonutz@gmail.com
          </email>
        </p>
        <p className="lead">
          <Button href="/Products" color="primary">
            Browse Products
          </Button>
        </p>
      </Jumbotron>
      <img width="99%" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/29178931_10156209240677236_5281829404845015040_o.jpg?oh=8cd3b9d4a52b95f48885699233f48f50&oe=5B3F2963" />
    <h2>Photo taken at the Flying Burrito Festival - 2018</h2>
    </div>;
}

export default Home;
