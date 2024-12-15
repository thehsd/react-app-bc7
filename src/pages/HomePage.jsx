import React from "react";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import {
  counterStates,
  decrease,
  increase,
} from "../redux/slices/counterSlice";
const HomePage = () => {
  const stateNumber = useSelector(counterStates);
  console.log(" stateNumber : ", stateNumber);

  const dispatch = useDispatch();

  function increaseStore() {
    dispatch(increase());
  }
  return (
    <div>
      <button onClick={increaseStore}>increase </button>
      <button onClick={() => dispatch(decrease())}>decrease </button>
      <ProductList />
    </div>
  );
};

export default HomePage;
