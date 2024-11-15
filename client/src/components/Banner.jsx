import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Street Style Magazine",
      price: 15.0,
      description:
        'This photobook explores the near future, where high fashion absorbs contrasting elements like "elderly fashion" and anti-fashion. Using plastic and fashion as symbols of human desire, it suggests that as reason suppresses desire, "elderly fashion" (reason) will eventually replace "high fashion" (desire).',
      image:
        "https://b-eautiful.com/cdn/shop/files/1.jpg?v=1723091713&width=720%20720w,",
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

  const [imageCounter, setImageCounter] = useState(
    "https://b-eautiful.com/cdn/shop/files/1.jpg?v=1723091713&width=720%20720w,"
  );
  const changeImage = () => {
    if (
      imageCounter ===
      "https://b-eautiful.com/cdn/shop/files/1.jpg?v=1723091713&width=720%20720w,"
    ) {
      setImageCounter(
        "https://b-eautiful.com/cdn/shop/files/2.jpg?v=1723091713&width=720%20720w,"
      );
    }
    if (
      imageCounter ===
      "https://b-eautiful.com/cdn/shop/files/2.jpg?v=1723091713&width=720%20720w,"
    ) {
      setImageCounter(
        "https://b-eautiful.com/cdn/shop/files/1.jpg?v=1723091713&width=720%20720w,"
      );
    }
  };
  setTimeout(changeImage, 1500);

  return (
    <div>
      <div className="w-full mx-auto max-w-screen-xl">
        <button className="text-4xl">Featured</button>
      </div>
      <div className="w-full mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2">
        <img
          onClick={() => handleClick(featuredProducts[0])}
          className="-mb-18"
          src={imageCounter}
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
