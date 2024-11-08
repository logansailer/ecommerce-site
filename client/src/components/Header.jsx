import { cartDark, logoDark } from "../assets/index";

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-bodyFont">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <img className="w-16" src={logoDark} alt="logoDark"></img>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li
              className="text-base text-black font-bold hover:text-[#006937]
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Home
            </li>
            <li
              className="text-base text-black font-bold hover:text-[#006937]
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Pages
            </li>
            <li
              className="text-base text-black font-bold hover:text-[#006937]
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Shop
            </li>
            <li
              className="text-base text-black font-bold hover:text-[#006937]
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Element
            </li>
            <li
              className="text-base text-black font-bold hover:text-[#006937]
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
            >
              Blog
            </li>
          </ul>
          <div className="relative">
            <img className="w-6" src={cartDark} alt="shoppingCart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
