const fs = require("fs");
const handleCEXData = require("../utils");

const data = fs.readFileSync("./laptops.json", "utf8", (err, data) => {});

const reqLaptops = () => {
  return handleCEXData(JSON.parse(data)).then((rankedCPUs) => rankedCPUs);
};

module.exports = reqLaptops;
