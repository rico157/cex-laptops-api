# CEX LAPTOPS / CPU RANK API

Laptops available to buy online in CEX with CPU ranking and benchmark added to it. Find the fastest laptop based on CPU performance. 


### Features:
- Load all laptops from the CEX API
- Add a CPU rank/benchmark to each laptop
- Build a JSON file with laptop details + the CPU ranking
---
## Endpoints available
---
* #### Load all laptops from CEX
```http
GET /loadLaptops
```
---
* #### JSON Object with laptops + CPU ranking
```http
GET /laptops
```
---

## Queries available
---
* #### RAM size
```http
GET /laptops?ram=8gb
```
---
* #### Drive size
```http
GET /laptops?drive=128gb
```
---
* #### Minimum price
```http
GET /laptops?minPrice=300
```
---
* #### Maximum price
```http
GET /laptops?maxPrice=600
```
---
* #### Order by
```http
GET /laptops?orderBy=DESC   // defaut ASC
```
---
* #### Sort by
```http
GET /laptops?sortBy=Benchmark   // defaut Rank
```
##### JSON Example

```json
{
  {
  Model: "ACER V5-122P",
  CPU: "A4-1250",
  RAM: "4GB Ram",
  Drive: "500GB HDD",
  Price: 160,
  Rank: "1284",
  Benchmark: "17.8",
  Link: "https://uk.webuy.com/product-detail/?id=SLAPACEV5122PB",
  img: "https://uk.static.webuy.com/product_images/Computing/Laptops - Windows/SLAPACEV5122PB_l.jpg"
  },
  ...
}
```

---

### Requirements

* [Node.js](https://nodejs.org/)

## How to install

* Clone the repository

```
$ git clone https://github.com/rico157/cex-laptops-api
```

* Install all the node packages with the command:

```
$ npm install
```

* Start the app
```
$ npm start
```

---

>[*This project is just the result of some mild curiosity, it's in no way intended to be malicious despite being unofficial and reverse engineered. The data itself is actually quite interesting and being able to access it pragmatically in this way could result in some interesting things!*](https://github.com/Southclaws/go-cex#to-cex)  
