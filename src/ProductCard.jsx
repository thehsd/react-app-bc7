import Box from "./Box";

const ProductCard = ({ title, price, image }) => {
  return (
    <Box>
      <img src={image} alt="title" width={100} height={100} />
      <h3>{title}</h3>
      <p>price: {price}</p>
    </Box>
  );
};

export default ProductCard;
