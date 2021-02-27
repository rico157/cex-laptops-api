const express = require("express");
const app = express();
const cors = require("cors");

const { getLaptops, loadData } = require("./controllers/laptops");

app.use(express.json());

app.use(cors());

app.get("/laptops", getLaptops);

app.get("/loadLaptops", loadData);

app.get("/portfolio", (req, res) => res.send("Portfolio Page Route"));

app.get("/contact", (req, res) => res.send("Contact Page Route"));

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
