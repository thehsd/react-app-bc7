// import useBasket from "../store/useBasket";
import BasketProductItem from "../components/BasketProductItem";
import { useSelector } from "react-redux";
import { basketStates } from "../redux/slices/basketSlice";
const BasketPage = () => {
  // const { items, invoice } = useBasket();
  const { items, invoice } = useSelector(basketStates);
  return (
    <div>
      <h2> total basket price: {invoice.totalPrice}</h2>
      {items.map((item) => {
        return <BasketProductItem key={item.id} productData={item} />;
      })}
    </div>
  );
};

export default BasketPage;
