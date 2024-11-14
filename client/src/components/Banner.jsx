import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { magazineOpen, magazineClosed } from "../assets/index";

const Banner = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "STREET STYLE JOURNAL",
      price: 15.0,
      description:
        'This photobook explores the near future, where high fashion absorbs contrasting elements like "elderly fashion" and anti-fashion. Using plastic and fashion as symbols of human desire, it suggests that as reason suppresses desire, "elderly fashion" (reason) will eventually replace "high fashion" (desire).',
      image: {
        1: magazineClosed,
        2: magazineOpen,
      },
    },
    {
      id: 2,
      title: "Reusable Bag",
      price: 20.0,
      description:
        'Recycled polyester 25 x 15 x 6" Folds into 5" pouch. Graphics on front and back',
      image:
        "https://b-eautiful.com/cdn/shop/files/Cabagges_Tools_Reusable_Bag.jpg?v=1727835678&width=2592",
    },
  ];

  const navigate = useNavigate();

  const handleClick = (item) => {
    console.log;
    navigate(`/product/${item.title}`, {
      state: {
        item: item,
      },
    });
  };

  const [imageCounter, setImageCounter] = useState(1);
  const changeImage = () => {
    if (imageCounter === 1) {
      setImageCounter(2);
    }
    if (imageCounter === 2) {
      setImageCounter(1);
    }
  };
  setTimeout(changeImage, 1500);

  return (
    <div>
      <div className="">
        <button className="text-4xl">Featured</button>
      </div>
      <div className="w-full mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2">
        <img
          onClick={() => handleClick(featuredProducts[0])}
          className="-mb-18"
          src={featuredProducts[0].image[imageCounter]}
          alt="featuredProduct"
        ></img>

        <img
          onClick={() => handleClick(featuredProducts[1])}
          className=""
          src={featuredProducts[1].image}
          alt="featuredProduct"
        ></img>
      </div>
    </div>
  );
};

export default Banner;
