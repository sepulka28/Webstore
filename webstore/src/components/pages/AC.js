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

    { id: 1, title: "Product 1", image: Image4, description: "High-quality high chair for your little highness. Order now and enjoy free shipping!" },
    { id: 2, title: "Product 2", image: Image5, description: "Elevate your space with our premium chair. Designed with style and comfort in mind. Order now and enjoy free shipping!" },
    { id: 3, title: "Product 3", image: Image6, description: "Relax in luxury with our plush chair. Perfect for unwinding after a long day. Order now for free shipping!" },
    { id: 4, title: "Product 4", image: Image7, description: "Upgrade your space with our sleek and contemporary chair. Combining style and comfort, it's perfect for any modern home." },
    { id: 5, title: "Product 5", image: Image8, description: "Experience the perfect blend of style and functionality with our simple wooden chair. Order now and enjoy sturdy, comfortable seating with free shipping!" },
    { id: 6, title: "Product 6", image: Image9, description: "Enhance your home decor with our selection of comfortable and stylish chairs. Enjoy free shipping on your purchase today!" }
    
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