import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

import Image4 from '../images/image4.jpg';
import Image5 from '../images/image5.jpg';
import Image6 from '../images/image6.jpg';
import Image7 from '../images/image7.jpg';
import Image8 from '../images/image8.jpg';
import Image9 from '../images/image9.jpg';

import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

function Cards () {

  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);

  const products = [

    { id: 1, title: "Product 1", image: Image4 },
    { id: 2, title: "Product 2", image: Image5 },
    { id: 3, title: "Product 3", image: Image6 },
    { id: 4, title: "Product 4", image: Image7 },
    { id: 5, title: "Product 5", image: Image8 },
    { id: 6, title: "Product 6", image: Image9 }
    
  ]

  const addCartProduct = product => {
    const index = cart.findIndex(p => p.id === product.id);
    if (index === -1) {
      setCart([...cart, { ...product }]);
      const existingProducts = localStorage.getItem('products');
      const newProduct = { id: product.id, title: product.title };
      if (!existingProducts) {
        localStorage.setItem('products', JSON.stringify([newProduct]));
      }
    } else {
      setCart(cart.filter(p => p.id !== product.id));
      localStorage.removeItem(`products-${product.id}`);
    }
  };
  
  const addLikedProduct = product => {
    const index = fav.findIndex(p => p.id === product.id);
    if (index === -1) {
      setFav([...fav, { ...product }]);
      const existingFav = localStorage.getItem('fav');
      const newFav = { id: product.id, title: product.title };
      if (!existingFav) {
        localStorage.setItem('products', JSON.stringify([newFav]));
      }
    } else {
      setFav(fav.filter(p => p.id !== product.id));
    }
  };
  

  return (
    <div className="ac_card_container container-fluid " >
    {products.map((product) => (
    <div key={product.id}>
    <Card className="card_ac" style={{ width: '18rem' }}>
      <Card.Img variant="center" src={product.image} className="image" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <FaShoppingCart className='shop_bag_icon_card' onClick={() => addCartProduct(product)} style={{ color: cart.some((p) => p.id === product.id) ? "#3fa24f" : "black" }}/> <IoIosHeart className='favourite_icon_card' 
        onClick={() => addLikedProduct(product)} style={{ color: fav.some((p) => p.id === product.id) ? "red" : "black" }}/>
      </Card.Body>
    </Card>
    </div>
     ))}
    </div>
    
  );
}

export default Cards;