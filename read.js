const fs = require("fs").promises;

const read = fs.readFile("laptops.json", "utf8", (err, data) => {
  if (err) throw err;
});

// read.then((res) => {
//   const data = JSON.parse(res);
//   const laptops = handleCEXData(data);

//   // console.log(laptops);
// });

module.exports = read;
