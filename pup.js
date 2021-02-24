const puppeteer = require("puppeteer");
const fs = require("fs").promises;
const read = require("./read");

async function scrape(
  ram = "8GB",
  drive = "SSD",
  maxPrice = "400",
  minPrice = "200"
) {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage();

  let record = 1;
  let numOfLaptops = 0;

  await fs.writeFile("laptops.json", JSON.stringify([]));

  // NEXT PAGE
  await (async function nextPage() {
    const readData = await fs.readFile("laptops.json", "utf8", (err, data) => {
      console.log(err);
    });

    const oldData = JSON.parse(readData);
    numOfLaptops = oldData.length;

    console.log("record ", record);
    console.log("prev ", numOfLaptops);

    const URL = `https://wss2.cex.uk.webuy.io/v3/boxes?q=${ram}%20${drive}&inStockOnline=1&minPrice=${minPrice}&maxPrice=${maxPrice}&categoryIds=[1065]&firstRecord=${record}&count=50`;
    console.log(URL);
    await page.goto(URL);

    console.log("loaded page");

    await page.content();

    innerText = await page.evaluate(() => {
      return JSON.parse(document.querySelector("body").innerText);
    });

    if (innerText.response.data === null) {
      return await browser.close();
    }

    const data = innerText.response.data.boxes;

    const mergedArrays = data.concat(oldData);

    await fs.writeFile("laptops.json", JSON.stringify(mergedArrays));

    record = record + 50;

    console.log("laptops ", data.length);
    console.log("merged ", mergedArrays.length);
    console.log("next record ", record);

    setTimeout(async () => {
      await nextPage();
    }, 5000);
  })();
}
module.exports = scrape;
