import { logoLight, paymentIcons } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#006937] text-white py-6 font-bodyFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-3">
        <div className="flex flex-col gap-4 ml-2">
          <img className="w-16" src={logoLight} alt="logoLight" />
          <img className="w-28" src={paymentIcons} alt="paymentIcons" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-titleFont">get in touch</h2>
          <p className="text-sm tracking-wide hover:text-black duration-300">
            <a href="https://logan-sailer.netlify.app/" target="_blank">
              personal site
            </a>
          </p>
          <p className="text-sm tracking-wide hover:text-black duration-300">
            <a href="https://www.linkedin.com/in/logan-sailer/" target="_blank">
              <i className="fa-brands fa-linkedin"></i> linkedin
            </a>
          </p>
          <p className="text-sm tracking-wide hover:text-black duration-300">
            <a href="https://github.com/logansailer" target="_blank">
              <i className="fa-brands fa-github"></i> github
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-titleFont">profile</h2>
          <Link to="/login">
            <p className="text-sm tracking-wide hover:text-black duration-300">
              <a>my account</a>
            </p>
          </Link>
          <p className="text-sm tracking-wide hover:text-black duration-300">
            <a href="">order tracking</a>
          </p>
          <p className="text-sm tracking-wide hover:text-black duration-300">
            <a href="">help & support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
