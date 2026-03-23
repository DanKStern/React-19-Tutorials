export const Product = ({ title, price, inStock, categories }) => {
  return (
    <div className="product">
      <h3>{title}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>In Stock: {inStock ? "Yes" : "No"}</p>
      <p>Categories: {categories.join(", ")}</p>
    </div>
  );
};
