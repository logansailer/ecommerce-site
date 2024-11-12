import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const productData = useSelector((state) => state.world.productData);
  console.log(productData);

  return (
    <div className="max-w-screen-xl mx-auto py-20 flex">
      <CartItem />
      <div className="w-1/3 bg-[#fafafa] py-6 px-4">
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
          <h2 className="text-2xl font-medium font-titleFont">cart total</h2>
          <p className="flex items-center gap-4">
            Subtotal: {""}
            <span className="font-bold text-lg">$200</span>
          </p>
          <p className="flex items-start gap-4">
            Shipping: {""}
            <span className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
