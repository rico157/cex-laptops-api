const readcsv = require("./readcsv");

const handleCEXData = async (data, query) => {
  const info = await getInfo(data, query);
  const filtered = filterData(info, query);
  return filtered;
};

const getInfo = async (data, { sortBy = "Rank" }) => {
  const csv = await readcsv();
  const regCPU = /\/(.*?)\//;
  const regModel = /(.*?)\//;
  const regex = /(?<=\/).*?(?=\/)/g;
  const formattedData = data.map((box) => {
    const infoData = box.boxName.match(regex);
    const cpu = regCPU.exec(box.boxName)[1].toUpperCase();
    const model = regModel.exec(box.boxName)[1].toUpperCase();
    const price = box.sellPrice;
    const link = `https://uk.webuy.com/product-detail/?id=${box.boxId}`;
    const cpuData = csv.find((csvcpu) =>
      csvcpu.Model.toUpperCase().includes(cpu)
    );
    if (cpuData === undefined) {
      return {
        Model: model,
        CPU: infoData[0],
        RAM: infoData[1],
        Drive: infoData[2],
        Price: price,
        Rank: false,
        Benchmark: false,
        Link: link
      };
    }
    return {
      Model: model,
      CPU: infoData[0],
      RAM: infoData[1],
      Drive: infoData[2],
      Price: price,
      Rank: cpuData.Rank,
      Benchmark: cpuData.Benchmark,
      Link: link
    };
  });
  return formattedData;
};

const filterData = (data, query) => {
  const {
    ram = "",
    drive = "",
    maxPrice = 10000,
    minPrice = 0,
    sortBy = "Rank",
    orderBy = ""
  } = query;
  const filteredData = data.filter((box, i, arr) => {
    return (
      arr.indexOf(box) === i &&
      box.RAM.startsWith(ram.toUpperCase()) &&
      box.Drive.includes(drive.toUpperCase()) &&
      box.Price >= minPrice &&
      box.Price <= maxPrice &&
      box.Rank
    );
  });
  const sortedData = filteredData.sort(function (a, b) {
    if (orderBy === "DESC") {
      return a[sortBy] - b[sortBy];
    }
    return b[sortBy] - a[sortBy];
  });

  return sortedData;
};

module.exports = handleCEXData;
