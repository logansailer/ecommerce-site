const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const router = express.Router();
const stripe = require("./Routes/Stripe");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", router);
app.use("/api/stripe", stripe);

app.get("/", (req, res) => {
  res.send("Welcome to .world's server");
});

// Read the JSON file
const db = JSON.parse(fs.readFileSync("db.json"));
app.get("/api/products", (req, res) => {
  res.json(db);
});

app.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
