import ProductCards from "./ProductCards";

const Products = () => {
  const productList = [];
  return (
    <div className="border-t-[1px] border-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <h1 className="text-4xl">Products</h1>
        <ProductCards />
      </div>
    </div>
  );
};

export default Products;
