import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import { toast, ToastContainer } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  const userInfo = useSelector((state) => state.world.userInfo);
  const productData = useSelector((state) => state.world.productData);
  const [total, setTotal] = useState("");
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotal(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("please sign in to checkout");
    }
  };

  const payment = async (token) => {
    await axios.post("http://localhost:3001/pay", {
      amount: totalAmount * 100,
      token: token,
    });
  };

  return (
    <div className="max-w-screen-xl min-h-[calc(100vh-263px)] py-20 grid grid-cols-1 md:grid-cols-2">
      <CartItem />
      <div className="bg-[#fafafa] py-6 px-4">
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
          <h2 className="text-2xl font-medium font-titleFont">cart total</h2>
          <p className="flex items-center gap-4">
            Subtotal: {""}
            <span className="font-bold text-lg">${total}</span>
          </p>
          <p className="flex items-start gap-4">
            Shipping: {""}
            <span className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </span>
          </p>
        </div>
        <p className="font-semibold flex justify-between mt-6">
          Total <span className="text-xl font-bold">${total}</span>
        </p>
        <button
          onClick={handleCheckout}
          className="bg-black text-white w-full py-3 mt-6 hover:bg-[#006937] duration-300"
        >
          proceed to checkout
        </button>
        {payNow && (
          <div className="w-full mt-6 flex items-center justify-center">
            <StripeCheckout
              stripeKey="pk_test_51QKZHzGl229qPh3QVIbDXbv5GbQeYDkxtjgJ3yfomBkXWtVsXjtc1t6BbSu76eznjhjvmG2hmSFyGVkKKFGqm31300rZ7gruLo"
              name=".world online shop"
              amount={total * 100}
              label="pay to .world"
              description={`your payment is $${total}`}
              token={payment}
              email={userInfo.email}
            />
          </div>
        )}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>
  );
};

export default Cart;
