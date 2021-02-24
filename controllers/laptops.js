const reqLaptops = require("../models/laptops");
const scrape = require("../pup");

const getLaptops = (req, res) => {
  reqLaptops().then((laptops) => res.send(laptops));
};

const loadData = (req, res) => {
  const {
    ram = "8GB",
    drive = "SSD",
    maxPrice = "400",
    minPrice = "200"
  } = req.query;
  scrape(ram, drive, maxPrice, minPrice)
    .then((numOfLaptops) => {
      const msg = "Scraping done";
      console.log(numOfLaptops);
      res.send(msg);
    })
    .catch(console.log);
};

module.exports = { getLaptops, loadData };
