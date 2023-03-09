
  export const addCartProduct = (product) => {
    const { cart } = this.state;
    if (!cart.some((p) => p.id === product.id)) {
      this.setState({ cart: [...cart, product] });
    } else {
      this.setState({ cart: cart.filter((p) => p.id !== product.id) });
    }
  }

  export const addLikedProduct = (product) => {
    const { fav } = this.state;
    if (!fav.some((p) => p.id === product.id)) {
      this.setState({ fav: [...fav, product] });
    } else {
      this.setState({ fav: fav.filter((p) => p.id !== product.id) });
    }
  }
