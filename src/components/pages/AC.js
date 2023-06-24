import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

import { Chairs } from '../ProductData';

function AC () {


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

  // function addToCart(chair) {
  //   setCart([...cart, chair]);
  //   localStorage.setItem('cart', JSON.stringify([...cart, chair]));
  // }

  // function addToFav(chair) {
  //   setFavorites([...favorites, chair]);
  //   localStorage.setItem('favorites', JSON.stringify([...favorites, chair]));
  // }

  // function isProductInCart(chair) {
  //   return cart.some((p) => p.id === chair.id);
    
   
  // }

  // const toggleCart = (product) => {
  //   if (isProductInCart(product)) {
  //     localStorage.removeItem(product);
  //   } else {
  //     addToCart(product);
  //   }
  // };

  // function isProductInFavorites(chair) {
  //   return favorites.some((p) => p.id === chair.id);
  // }
   
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
                <FaShoppingCart className='shop_bag_icon_card' onClick={() => addCartProduct(chair)} style={{ color: cart.some((p) => p.id === chair.id) ? '#3fa24f' : "black"}}/> 
                <IoIosHeart className='favourite_icon_card' onClick={() => addLikedProduct(chair)}  style={{ color: fav.some((p) => p.id === chair.id) ? "red" : "black" }}/>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    )};
  


export default AC;
