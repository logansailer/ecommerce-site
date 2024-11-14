import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
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
      <div className="cursor-pointer overflow-hidden">
        <img
          className="w-full aspect-square object-cover group-hover:scale-110 duration-300"
          src={item.image}
          alt="productImage"
        />
      </div>
      <div className="font-bodyFont mt-3 py-2 relative text-center">
        <button
          className="text-white bg-[#006937] py-1 px-3 rounded-2xl transition ease 
        opacity-100 md:opacity-0 group-hover:opacity-100 duration-400 text-sm"
        >
          {item.price.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default Item;