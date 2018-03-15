import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src:
      "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/29186981_10156209240467236_2025667504923213824_o.jpg?oh=3ceaba8db13c51ef48f0627ed8928d31&oe=5B3C77A5"
  },
  {
    src:
      "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/29216103_10156209240882236_8665173902105772032_o.jpg?oh=41190ac33a6200d6e744678051237089&oe=5B3712B6"
  },
  {
    src:
      "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/29196448_10156209240152236_4516162724538875904_n.jpg?oh=66fe1b4bc8fc15d7a9c8c95ff515bf4d&oe=5B47A854"
  }
];

const Gallery = () => <UncontrolledCarousel items={items} />;

export default Gallery;
