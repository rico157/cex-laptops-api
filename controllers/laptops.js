const reqLaptops = require("../models/laptops");
const scrape = require("../pup");

const getLaptops = (req, res) => {
  reqLaptops().then((laptops) => res.send(laptops));
};

const loadData = (req, res) => {
  scrape().then(() => res.send("scrap done"));
};

module.exports = { getLaptops, loadData };
