const Banner = () => {
  const featuredProducts = [
    "https://cdn.shopify.com/s/files/1/0456/5604/7770/files/foto_banner_PC.png?v=1700496567",
  ];
  
  return (
    <div className="w-full h-auto mx-auto max-w-screen-xl">
      <div className="h-[650px] relative">
        <img
          className="w-screen h-full object-cover"
          src={featuredProducts[0]}
          alt="featuredProduct"
        ></img>
        <div className="absolute w-fit left-0 right-0 mx-auto flex bottom-32">
          <button className="border-black border-[1px] p-2" onClick={"shopAll"}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
