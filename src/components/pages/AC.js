import React from 'react';
import Card from 'react-bootstrap/Card';
import { ProductData } from '../ProductData';

function AC () {

  const chairs = ProductData.Chairs.map((chair) => ({
    id: chair.id,
    title: chair.title,
    images: chair.images,
    description: chair.description,
  }));

   
    return (
      
      <div className="ac_card_container container-fluid ">
       
        {chairs.map((chair) => (
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
