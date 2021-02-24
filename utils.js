const readcsv = require("./readcsv");

const handleCEXData = async (data) => {
  const filtered = filterData(data);
  const info = await getInfo(filtered);
  return info;
};

const getInfo = async (data) => {
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
      return { Model: model, CPU: cpu + " not found" };
    }
    return {
      Model: model,
      CPU: infoData[0],
      RAM: infoData[1],
      drive: infoData[2],
      Price: price,
      Rank: cpuData.Rank,
      Benchmark: cpuData.Benchmark,
      Link: link
    };
  });
  const sortedData = formattedData.sort(function (a, b) {
    return b.Benchmark - a.Benchmark;
  });

  return sortedData;
};

const filterData = (data) => {
  return data.filter((box, i, arr) => arr.indexOf(box) === i);
};

module.exports = handleCEXData;
