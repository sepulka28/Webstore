import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

import { Chairs } from '../ProductData';

function AC () {


  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  function addToCart(chair) {
    setCart([...cart, chair]);
    localStorage.setItem('cart', JSON.stringify([...cart, chair]));
  }

  function addToFav(chair) {
    setFavorites([...favorites, chair]);
    localStorage.setItem('favorites', JSON.stringify([...favorites, chair]));
  }

  function isProductInCart(chair) {
    return cart.some((p) => p.id === chair.id);
   
  }

  function isProductInFavorites(chair) {
    return favorites.some((p) => p.id === chair.id);
  }
   
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
                <FaShoppingCart className='shop_bag_icon_card' onClick={() => addToCart(chair)} style={{ color: isProductInCart(chair) ? '#3fa24f' : 'black'}}/> 
                <IoIosHeart className='favourite_icon_card' onClick={() => addToFav(chair)} style={{ color: isProductInFavorites(chair) ? 'red' : 'black'}}/>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    )};
  


export default AC;
