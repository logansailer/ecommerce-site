import ProductCards from "./ProductCards";

const Products = ({ products }) => {
  return (
    <div className="border-t-[1px] border-gray-800">
      <div className="ml-2">
        <h1 className="text-4xl max-w-screen-xl mx-auto">Products</h1>
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-3 gap-10">
          {products.map((item) => (
            <ProductCards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
