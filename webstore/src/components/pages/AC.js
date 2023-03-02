import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

import Image4 from '../images/image4.jpg';
import Image5 from '../images/image5.jpg';
import Image6 from '../images/image6.jpg';
import Image7 from '../images/image7.jpg';


import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

function Cards () {

  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);

  const products = [

    { id: 1, title: "Product 1", image: Image4, description: "Upgrade your little one's seating experience with our high-quality high chair. Order now and take advantage of our free shipping offer!" },
    { id: 2, title: "Product 2", image: Image5, description: "Elevate your space with our premium chair. Designed with style and comfort in mind. Order now and enjoy free shipping!" },
    { id: 3, title: "Product 3", image: Image6, description: "Indulge in comfort with our cozy chair, designed to help you unwind after a long day. Order now and enjoy the added bonus of free shipping!" },
    { id: 4, title: "Product 4", image: Image7, description: "Elevate your home with our stylish and modern chair. Designed to seamlessly blend style and comfort, it's the perfect addition to any space." },

    
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
      localStorage.removeItem('products');
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
      localStorage.removeItem('products');
    }
  };
  

  return (
    <div className="ac_card_container container-fluid " >
    {products.map((product) => (
    <div key={product.id}>
    <Card className="card_ac" style={{ width: '18rem' }}>
      <Card.Img variant="center" src={product.image} className="image" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
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