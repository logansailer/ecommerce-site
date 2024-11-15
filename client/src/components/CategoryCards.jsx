import { useNavigate } from "react-router-dom";

const CategoryCards = ({ item }) => {
  const navigate = useNavigate();
  const id = item.title;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const linkId = idString(id);

  const handleClick = () => {
    navigate(`/category/${linkId}`, {
      state: {
        items: item.category,
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
        <button className="font-titleFont text-white bg-[#006937] py-1 px-3 rounded-2xl text-lg">
          {item.title}
        </button>
      </div>
    </div>
  );
};

export default CategoryCards;
