import { products } from "./ts/products";
import ProductsItem from "./UI/ProductsItem";

const productList = () => {
  const result = products.map((card) => {
    return (
      <ProductsItem img={card.img} details={card.details} price={card.price} />
    );
  });

  return (
    <div className="px-4 ">
      <div className="grid grid-cols-2 gap-5 ">{...result}</div>
    </div>
  );
};

export default productList;
