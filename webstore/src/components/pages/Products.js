// import React from "react";

//   export class Product extends React.Component{
  
//   constructor(id, title, image, description) {
//     super();
//     this.id = id;
//     this.title = title;
//     this.image = image;
//     this.description = description;
//     this.cart = [];
//     this.fav = [];

//   }

//   addToCart() {
//     const index = this.cart.findIndex(p => p.id === this.id);
//     const product = {...this};
//     if (index === -1) {
//       this.cart.push(product);
//       const existingProducts = localStorage.getItem('products');
//       const newProduct = { id: this.id, title: this.title };
//       if (!existingProducts) {
//         localStorage.setItem('products', JSON.stringify([newProduct]));
        
//       } else {
//         const productsArray = JSON.parse(existingProducts);
//         productsArray.push(newProduct);
//         localStorage.setItem('products', JSON.stringify(productsArray));
//       }
//     } else {
//       this.cart = this.cart.filter(p => p.id !== this.id);
//       localStorage.removeItem('products');
//     }

//     return this.cart;
    
//   }
  

//   addToFav() {
//     const index = this.fav.findIndex(p => p.id === this.id);
//     const product = {...this};
//     if (index === -1) {
//       this.fav.push(product);
//       const existingFav = localStorage.getItem('fav');
//       const newFav = { id: this.id, title: this.title };
//       if (!existingFav) {
//         localStorage.setItem('fav', JSON.stringify([newFav]));
//       } else {
//         const favArray = JSON.parse(existingFav);
//         favArray.push(newFav);
//         localStorage.setItem('fav', JSON.stringify(favArray));
//       }
//     } else {
//       this.fav = this.fav.filter(p => p.id !== this.id);
//       localStorage.removeItem('fav');
//     }

//     return this.fav;
//   }
  
// }

// export default Product;

