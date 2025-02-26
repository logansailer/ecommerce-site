import axios from "axios";

export async function productsData() {
  const products = await axios.get("http://localhost:8000/api/products"); // Fetching data from the backend (replace with "http://localhost:8000/api/products" if running locally)
  return products;
}
