import React from "react";
// import useBasket from "../store/useBasket";
import { removeBasket } from "../redux/slices/basketSlice";
import { useDispatch } from "react-redux";
// zustand
// custom Hooks
const ProductItem = ({ productData }) => {
  const { imageSrc, name, price, quantity } = productData;
  const dispatch = useDispatch();
  // const { actions } = useBasket();

  return (
    <div className="bg-zinc-200 p-2 m-2 rounded-md">
      <img src={imageSrc} alt={name} />
      <h2 className="text-xl text-slate-900 font-bold	">{name}</h2>
      <div className="flex justify-between mb-3">
        <p className="text-emerald-800 font-bold	">price </p>
        <p className="font-bold	">${price}</p>
      </div>
      <div className="flex justify-between mb-3">
        <p className="text-gray-800 font-bold	">QTY </p>
        <p className="font-bold	">{quantity}</p>
      </div>
      <button
        className="bg-red-600 p-2 rounded text-white "
        // onClick={() => actions.removeFromBasket(productData)}
        onClick={() => dispatch(removeBasket(productData))}
      >
        Remove item
      </button>
    </div>
  );
};

export default ProductItem;
