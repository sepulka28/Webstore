import React from 'react';
import Card from 'react-bootstrap/Card';

import { Tables } from '../ProductData';

function Table () {


  return (
    <div className="ac_card_container container-fluid " >
    {Tables.map((table) => (
    <div key={table.id}>
    <Card className="card_ac" style={{ width: '18rem' }}>
      <Card.Img variant="center" src={table.images} className="image" />
      <Card.Body>
        <Card.Title>{table.title}</Card.Title>
        <Card.Text>
          {table.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
     ))}
    </div>
    
  );
  }

export default Table;