
export class Product {
  constructor(id, title, image, description) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
  }

  addToCart() {
    const index = this.cart.findIndex(p => p.id === this.id);
    if (index === -1) {
      this.cart.push({...this});
      const existingProducts = localStorage.getItem('products');
      const newProduct = { id: this.id, title: this.title };
      if (!existingProducts) {
        localStorage.setItem('products', JSON.stringify([newProduct]));
      } else {
        const productsArray = JSON.parse(existingProducts);
        productsArray.push(newProduct);
        localStorage.setItem('products', JSON.stringify(productsArray));
      }
    } else {
      this.cart = this.cart.filter(p => p.id !== this.id);
      localStorage.removeItem('products');
    }
  }

  addToFav() {
    const index = this.fav.findIndex(p => p.id === this.id);
    if (index === -1) {
      this.fav.push({...this});
      const existingFav = localStorage.getItem('fav');
      const newFav = { id: this.id, title: this.title };
      if (!existingFav) {
        localStorage.setItem('fav', JSON.stringify([newFav]));
      } else {
        const favArray = JSON.parse(existingFav);
        favArray.push(newFav);
        localStorage.setItem('fav', JSON.stringify(favArray));
      }
    } else {
      this.fav = this.fav.filter(p => p.id !== this.id);
      localStorage.removeItem('fav');
    }
  }
}

export default Product;


// class Sofas extends Furniture {
//   constructor() {
//     super();
//     this.products = [
//       new Product(
//         14,
//         "Sofa 1",
//         Image19,
//         "Elevate your living space with our rich and sumptuous brown leather sofa, designed for comfort and style. Sink in and savor the experience."
//       ),
//       new Product(
//         15,
//         "Sofa 2",
//         Image20,
//         "Create a luxurious oasis in your living space with our white long sofa, perfect for those who seek both style and comfort."
//       ),
//       new Product(
//         16,
//         "Sofa 3",
//         Image21,
//         "Indulge in ultimate comfort with our luxurious quilt grey sofa, perfect for creating a cozy and inviting atmosphere in any living space."
//       ),
//       new Product(
//         17,
//         "Sofa 4",
//         Image22,
//         "Indulge in the serene comfort of our deep green sofa - the perfect addition to elevate your living space's elegance and simplicity."
//       ),
//     ];
//   }}