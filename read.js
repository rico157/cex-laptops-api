const fs = require("fs").promises;
// const handleCEXData = require("./utils");

const read = fs.readFile("laptops.json", "utf8", (err, data) => {
  if (err) throw err;
  // let boxes = JSON.parse(data);
  // const keys = Object.keys(boxes);
  // return keys.map((key) => boxes[key].boxName);
  // return boxes;
  // console.log(keys.map((key) => boxes[key].boxName));
});

// read.then((res) => {
//   const data = JSON.parse(res);
//   const laptops = handleCEXData(data);

//   // console.log(laptops);
// });

module.exports = read;
