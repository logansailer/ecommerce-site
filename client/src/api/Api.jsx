import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    "https://ecommerce-backend-rouu.onrender.com/api/products"
  ); // Fetching data from the backend (replace with "http://localhost:8000/api/products" if running locally)
  return products;
}
