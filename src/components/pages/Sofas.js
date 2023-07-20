import React from 'react';
import Card from 'react-bootstrap/Card';

import { Sofas } from '../ProductData';

function Sofa () {


  return (
    <div className="ac_card_container container-fluid " >
    {Sofas.map((sofa) => (
    <div key={sofa.id}>
    <Card className="card_ac" style={{ width: '18rem' }}>
      <Card.Img variant="center" src={sofa.images} className="image" />
      <Card.Body>
        <Card.Title>{sofa.title}</Card.Title>
        <Card.Text>
          {sofa.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
     ))}
    </div>
    
  );
  }

export default Sofa;