const reqLaptops = require("../models/laptops");
const scrape = require("../pup");

const getLaptops = (req, res) => {
  reqLaptops(req.query).then((laptops) => res.send(laptops));
};

const loadData = (req, res) => {
  scrape()
    .then((numOfLaptops) => {
      const msg = "Scraping...";
      console.log(numOfLaptops);
      res.send(msg);
    })
    .catch(console.log);
};

module.exports = { getLaptops, loadData };
