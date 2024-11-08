import { logoLight, paymentIcons } from "../assets";

const Footer = () => {
  return (
    <div className="bg-[#006937] text-white py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-7">
          <img className="w-16" src={logoLight} alt="logoLight" />
          <p className="text-sm tracking-wide hover:text-black">
            <a href="https://logan-sailer.netlify.app/" target="_blank">
              personal website
            </a>
          </p>
          <img className="w-40" src={paymentIcons} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
