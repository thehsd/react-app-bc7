import React from "react";
import useBasket from "../store/useBasket";
// zustand
// custom Hooks
const ProductItem = ({ productData }) => {
  const { imageSrc, name, price } = productData;

  const { actions } = useBasket();

  return (
    <div className="bg-zinc-200 p-2 m-2 rounded-md">
      <img src={imageSrc} alt={name} />
      <h2 className="text-xl text-slate-900 font-bold	">{name}</h2>
      <div className="flex justify-between mb-3">
        <p className="text-emerald-800 font-bold	">price </p>
        <p className="font-bold	">${price}</p>
      </div>
      <button
        className="bg-cyan-600 p-2 rounded text-white "
        onClick={() => actions.addToBasket(productData)}
      >
        add item
      </button>
    </div>
  );
};

export default ProductItem;
