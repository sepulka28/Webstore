import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';


import Image10 from '../images/image10.jpg';
import Image11 from '../images/image11.jpg';
import Image12 from '../images/image12.jpg';
import Image13 from '../images/image13.jpg';

import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

function Tables () {

  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);

  const products = [

    { id: 5, title: "Table 1", image: Image10, description: "Upgrade your living room's decor with our high-quality coffee table. Elevate your space with its stylish design and sturdy construction." },
    { id: 6, title: "Table 2", image: Image11, description: "Upgrade your dining room with this elegant and stylish wooden table that seats many. Perfect for hosting memorable gatherings." },
    { id: 7, title: "Table 3", image: Image12, description: "Introduce a modern flair to your space with our chic white table, boasting a stylish rounded design. Order now and enjoy free shipping!" },
    { id: 8, title: "Table 4", image: Image13, description: "Bring warmth and comfort to your living room with our artisanal low wooden table, perfect for cozy nights in front of the TV." },
 
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
      else {
        const productsArray = JSON.parse(existingProducts);
        productsArray.push(newProduct);
        localStorage.setItem('products', JSON.stringify(productsArray));
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
        localStorage.setItem('fav', JSON.stringify([newFav]));
      }
    } else {
      setFav(fav.filter(p => p.id !== product.id));
      localStorage.removeItem('fav');
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

export default Tables;