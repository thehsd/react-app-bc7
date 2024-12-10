import React from "react";
import products from "../constants/productData";
import ProductItem from "./ProductItem";
const ProductList = () => {
  // use state
  // use effect
  // use ref
  // use context
  return (
    <div>
      {products.map((product) => {
        return <ProductItem key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default ProductList;
