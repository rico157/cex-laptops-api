const app = require("express")();
const { getLaptops, loadData } = require("./controllers/laptops");

app.get("/", getLaptops);

app.get("/scrap", loadData);

app.get("/portfolio", (req, res) => res.send("Portfolio Page Route"));

app.get("/contact", (req, res) => res.send("Contact Page Route"));

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
