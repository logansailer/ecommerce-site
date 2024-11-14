import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Item from "./Item";

const ItemCards = () => {
  const [items, setItems] = useState([]);

  const location = useLocation();
  useEffect(() => {
    setItems(location.state.items);
  }, []);

  return (
    <div
      className="mx-2 max-w-screen-xl h-[calc(100vh-263px)] text-sm py-3 grid grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 gap-16 gap-y-12"
    >
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemCards;
