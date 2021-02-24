const fs = require("fs");
const handleCEXData = require("../utils");

const reqLaptops = () => {
  const data = fs.readFileSync("./laptops.json", "utf8", (err, data) => {});
  return handleCEXData(JSON.parse(data)).then((rankedCPUs) => rankedCPUs);
};

module.exports = reqLaptops;
