import { useSelector, useDispatch } from "react-redux";
import {
  subtractQuantity,
  addQuantity,
  deleteItem,
  resetCart,
} from "../redux/worldSlice";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.world.productData);

  return (
    <div className="w-full pr-10 ml-2">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">shopping cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item.id}
            className=" p-3 gap-6 mt-6 grid grid-cols-2 md:grid-cols-4 "
          >
            <div className="flex justify-center items-center gap-2">
              <i
                onClick={() =>
                  dispatch(deleteItem(item.id)) &
                  toast.error(`${item.title} is removed`)
                }
                className="fa-solid fa-x text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              ></i>
              <img
                className="w-28 object-cover"
                src={item.image}
                alt="productImage"
              />
            </div>
            <div className="flex justify-center items-center">
              <h2>{item.title}</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-between text-gray-500 border p-3 gap-3">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <button
                    onClick={() =>
                      dispatch(
                        subtractQuantity({
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border h-5 text-lg flex items-center justify-center px-2 hover:bg-gray-700
                     hover:text-white duration-300 active:bg-black"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        addQuantity({
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border h-5 text-lg flex items-center justify-center px-2 
              hover:bg-gray-700 hover:text-white duration-300 active:bg-black"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p>${item.quantity * item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("your cart has been emptied")
        }
        className="bg-red-600 text-white mt-8 ml-2 py-1 px-6 hover:bg-red-700 duration-300"
      >
        reset cart
      </button>
      <Link to="/">
        <button className="m-8 ml-2 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <i className="fa-solid fa-arrow-left"></i>
          </span>
          back to store
        </button>
      </Link>
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
        theme="dark"
        transition:Bounce
      />
    </div>
  );
};

export default CartItem;
