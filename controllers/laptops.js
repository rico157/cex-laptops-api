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
  console.log(ram, drive, maxPrice, minPrice);
  scrape(ram, drive, maxPrice, minPrice)
    .then((numOfLaptops) => {
      const msg = "Scraping done";
      console.log(numOfLaptops);
      res.send();
    })
    .catch(console.log);
};

module.exports = { getLaptops, loadData };
