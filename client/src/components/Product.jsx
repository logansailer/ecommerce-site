import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/worldSlice";
import { toast, ToastContainer } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
      <div className="w-2/5 relative">
        <img
          className="w-full h-[550px] object-cover"
          src={details.image}
          alt="productImage"
        ></img>
      </div>
      <div className="w-3/5 ">
        <div>
          <h2 className="text-4xl font-semibold">{details.title}</h2>
          <p className="text-2xl font-medium text-gray-900">{details.price}</p>
        </div>
        <div>
          <p className="text-base text-gray-500 my-5">{details.description}</p>
          <div className="flex gap-4">
            <div className=" w-52 flex items-center justify-between text-gray-500 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setQuantity(quantity === 1 ? quantity : quantity - 1)
                  }
                  className="border h-5 text-lg flex items-center justify-center px-2 
              hover:bg-gray-700 hover:text-white duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border h-5text-lg flex items-center justify-center px-2 
              hover:bg-gray-700 hover:text-white duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: details.id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: quantity,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added`)
              }
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
};

export default Product;
