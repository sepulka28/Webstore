import React from 'react';
import Card from 'react-bootstrap/Card';

import { Dressers } from '../ProductData';

function Dresser () {
  
  return (
    <div className="ac_card_container container-fluid " >

    {Dressers.map((dresser) => (
    <div key={dresser.id}>
    <Card className="card_ac" style={{ width: '18rem' }}>
      <Card.Img variant="center" src={dresser.images} className="image" />
      <Card.Body>
        <Card.Title>{dresser.title}</Card.Title>
        <Card.Text>
          {dresser.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
     ))}
    </div>
    
  );
  }

export default Dresser;