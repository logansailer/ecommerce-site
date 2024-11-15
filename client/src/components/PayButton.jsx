import axios from "axios";

const PayButton = ({ cartItems }) => {
  const handleCheckout = async () => {
    console.log(cartItems);
    //const stripe = await loadStripe(import.meta.env.VITE_STRIPEPUBLICKEY);

    axios
      .post("http://localhost:8000/api/stripe/create-checkout-session", {
        cartItems,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button
        onClick={handleCheckout}
        className="bg-black text-white w-full py-3 mt-6 hover:bg-[#006937] duration-300"
      >
        Check Out
      </button>
    </>
  );
};
export default PayButton;
