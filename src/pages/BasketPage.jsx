import useBasket from "../store/useBasket";
import BasketProductItem from "../components/BasketProductItem";
const BasketPage = () => {
  const { items, invoice } = useBasket();
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
