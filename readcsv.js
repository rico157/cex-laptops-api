const fs = require("fs").promises;
const csv = require("csvtojson");

const csvFilePath = "./cpus.csv";

const readcsv = async () => {
  const jsonArray = await csv().fromFile(csvFilePath);
  return jsonArray;
};

module.exports = readcsv;

// const parse = require("csv-parse");
// const readcsv = fs.readFile("cpus.csv", "utf8", (err, data) => {
//   if (err) throw err;
//   return data;
// });
// .then((res) => {
// const data = JSON.parse(res);
// const titles = data.map((box) => box.boxName);
// console.log(titles, data.length);
// return parse(res, { columns: false, trim: true }, function (err, rows) {
// return "";
//   return rows.map((row) => {
//     return {
//       cpu: row[3],
//       rank: row[4],
//       benchmark: row[5]
//     };
//   });
//   // );
// });
// });

//

// .createReadStream("cpus.csv")
//   .pipe(parse())
//   .on("data", function (data) {
//     try {
//       return data;
//       // console.log(data);
//       //perform the operation
//     } catch (err) {
//       //error handler
//     }
//   })
//   .on("end", function () {
//     //some final operation
//   });
