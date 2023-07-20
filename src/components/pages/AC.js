import React from 'react';
import Card from 'react-bootstrap/Card';
import { Chairs } from '../ProductData';

function AC () {

   
    return (
      
      <div className="ac_card_container container-fluid ">
       
        {Chairs.map((chair) => (
          <div key={chair.id}>
            <Card className="card_ac" style={{ width: '18rem' }}>
              <Card.Img variant="center" src={chair.images} className="image" />
              <Card.Body>
                <Card.Title>{chair.title}</Card.Title>
                <Card.Text>
                  {chair.description}
                </Card.Text>
    
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    )};
  


export default AC;
