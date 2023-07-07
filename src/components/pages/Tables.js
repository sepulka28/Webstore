import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';


import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

import { Tables } from '../ProductData';

function Table () {

  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);


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
    {Tables.map((table) => (
    <div key={table.id}>
    <Card className="card_ac" style={{ width: '18rem' }}>
      <Card.Img variant="center" src={table.images} className="image" />
      <Card.Body>
        <Card.Title>{table.title}</Card.Title>
        <Card.Text>
          {table.description}
        </Card.Text>
        <FaShoppingCart className='shop_bag_icon_card' onClick={() => addCartProduct(table)} style={{ color: cart.some((p) => p.id === table.id) ? "#3fa24f" : "black" }}/> <IoIosHeart className='favourite_icon_card' 
        onClick={() => addLikedProduct(table)} style={{ color: fav.some((p) => p.id === table.id) ? "red" : "black" }}/>
      </Card.Body>
    </Card>
    </div>
     ))}
    </div>
    
  );
  }

export default Table;