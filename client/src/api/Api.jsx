import axios from "axios";

export async function productsData() {
  const products = await axios.get("http://localhost:8000/api/products");
  return products;
}
