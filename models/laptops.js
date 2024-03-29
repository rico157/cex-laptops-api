const fs = require("fs");
const handleCEXData = require("../utils");

const reqLaptops = (query) => {
  const data = fs.readFileSync("./laptops.json", "utf8", (err, data) => {});

  // Add CPU rank to laptops data
  return handleCEXData(JSON.parse(data), query).then(
    (rankedCPUs) => rankedCPUs
  );
};

module.exports = reqLaptops;
