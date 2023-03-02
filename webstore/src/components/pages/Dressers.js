import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';


import Image15 from '../images/image15.jpg';
import Image16 from '../images/image16.jpg';
import Image17 from '../images/image17.jpg';
import Image18 from '../images/image18.jpg';

import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

function Dressers () {
  
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);

  const products = [

    { id: 10, title: "Product 2", image: Image15, description: "Elevate your modern bathroom decor with our sleek and stylish dresser. Perfect for storing your essentials in a sophisticated way. Order now!" },
    { id: 11, title: "Product 3", image: Image16, description: "Elevate your storage game with our spacious black dresser, featuring numerous drawers to keep your belongings organized in style." },
    { id: 12, title: "Product 4", image: Image17, description: "Light-brown dresser, designed to bring practicality to your cozy space. With various drawers, offering ample storage for all your essentials." },
    { id: 13, title: "Product 5", image: Image18, description: "Upgrade your bedroom with our narrow, deep brown dresser made of high-quality wood and featuring five spacious drawers." },
 
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

export default Dressers;