import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCards = ({ item }) => {
  const dispatch = useDispatch
  const navigate = useNavigate();
  const id = item.title;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const linkId = idString(id);

  const handleClick = () => {
    navigate(`/product/${linkId}`, {
      state: {
        item: item,
      },
    });
  };

  return (
    <div onClick={handleClick} className="group">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300"
          src={item.image}
          alt="productImage"
        />
      </div>
      <div className="font-bodyFont w-full px-10 py-4">
        <h2 className="font-bold text-center">{item.title}</h2>
        <div className="relative w-full text-center">
          <p>{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
