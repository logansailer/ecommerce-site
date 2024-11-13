import { Link } from "react-router-dom";
import { cartDark, logoDark } from "../assets/index";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.world.productData);
  const userInfo = useSelector((state) => state.world.userInfo);

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-bodyFont sticky top-0 z-50">
      <div className="max-w-screen-xl  h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <img className="w-16 ml-2" src={logoDark} alt="logoDark"></img>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li
                className="text-base text-black font-bold hover:text-[#006937]
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              >
                home
              </li>
            </Link>
            <li
              className="text-base text-black font-bold hover:text-[#006937]
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              pages
            </li>
            <li
              className="text-base text-black font-bold hover:text-[#006937]
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              shop
            </li>
            <li
              className="text-base text-black font-bold hover:text-[#006937]
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              element
            </li>
            <Link to="/login">
              <li
                className="text-base text-black font-bold hover:text-[#006937]
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
              >
                {userInfo ? <p>account</p> : <p>login</p>}
              </li>
            </Link>
          </ul>
          <Link to="/cart">
            <div className="flex">
              <span className="w-3">{productData.length}</span>
              <img className="w-6 mr-2" src={cartDark} alt="shoppingCart" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
