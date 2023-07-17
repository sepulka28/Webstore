import React from 'react';
import Card from 'react-bootstrap/Card';

function ShoppingBag() {

  const products = JSON.parse(localStorage.getItem('products')) || [];


  return (
    <div className="body">
    <div className="ac_card_container container-fluid " >
    {products.map((product) => (
    <div key={product.id}>
    <Card className="card_ac" style={{ width: '18rem' }}>
      <Card.Img variant="center" src={product.image} className="image" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
      </Card.Body>
    </Card>
    </div>
     ))}
    </div>
    </div>
  );
  }

export default ShoppingBag;