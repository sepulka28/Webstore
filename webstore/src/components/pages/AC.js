import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";

import Product from './Products';

import Image4 from '../images/image4.jpg';
import Image5 from '../images/image5.jpg';
import Image6 from '../images/image6.jpg';
import Image7 from '../images/image7.jpg';

class AC extends Product{

  render() {
    const products = [
      new AC (
        1,
        "Sofa 1",
        Image4,
        "Elevate your living space with our rich and sumptuous brown leather sofa, designed for comfort and style. Sink in and savor the experience.",
        
      ),
      new AC (
        2,
        "Sofa 2",
        Image5,
        "Create a luxurious oasis in your living space with our white long sofa, perfect for those who seek both style and comfort."
      ),
      new AC (
        3,
        "Sofa 3",
        Image6,
        "Indulge in ultimate comfort with our luxurious quilt grey sofa, perfect for creating a cozy and inviting atmosphere in any living space."
      ),
      new AC (
        4,
        "Sofa 4",
        Image7,
        "Indulge in the serene comfort of our deep green sofa - the perfect addition to elevate your living space's elegance and simplicity."
      )
    ];

   
    return (
      
      <div className="ac_card_container container-fluid ">
       
        {products.map((product) => (
          <div key={product.id}>
            <Card className="card_ac" style={{ width: '18rem' }}>
              <Card.Img variant="center" src={product.image} className="image" />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <FaShoppingCart className='shop_bag_icon_card' onClick={() => this.addToCart(product)} style={{ color: this.cart.some((p) => p.id === product.id) ? "#3fa24f" : "black" }}/> 
                <IoIosHeart className='favourite_icon_card' onClick={() => this.addToFav(product)} style={{ color: this.fav.some((p) => p.id === product.id) ? "red" : "black" }}/>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

export {AC};
