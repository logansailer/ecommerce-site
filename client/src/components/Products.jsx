import Banner from "./Banner";
import CategoryCards from "./CategoryCards";

const Products = ({ products }) => {
  return (
    <div>
      <Banner />
      <div className="border-t-[1px] border-gray-800 text-4xl max-w-screen-xl mx-auto">
        <h1 className="mx-2">Products</h1>
        <div
          className="mx-2 max-w-screen-xl text-sm py-3 grid grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 gap-16 gap-y-12"
        >
          {products.map((item) => (
            <CategoryCards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
