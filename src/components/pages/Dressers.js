import React from 'react';
import Card from 'react-bootstrap/Card';

import { ProductData } from '../ProductData';

function Dresser () {

  const dressers = ProductData.Dressers.map((dresser) => ({
    id: dresser.id,
    title: dresser.title,
    images: dresser.images,
    description: dresser.description,
  }));
  
  return (
    <div className="ac_card_container container-fluid " >

    {dressers.map((dresser) => (
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