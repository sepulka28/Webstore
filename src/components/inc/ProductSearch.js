import React from 'react'
import { useState } from 'react';

import {ProductData} from '../ProductData';


function ProductSearch() {

  const [searchInput, setSearchInput] = useState(""); 

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  
  };

  const productArray = Object.values(ProductData).flat();
    productArray.filter((product) => {
    return product.name.match(searchInput);
  });


  return (
    <div>
     
    </div>
  );
}

export default ProductSearch;


