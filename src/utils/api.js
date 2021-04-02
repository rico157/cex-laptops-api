import axios from "axios";

// const URL = "http://localhost:3000/laptops";
const URL = "https://cex-laptops-api.herokuapp.com/laptops";


export default function getLaptops(query) {
  const sortBy = query.sortBy;
  const orderBy = query.orderBy;
  const maxPrice = 250;
  console.log(query);
  return axios.get(URL, {
    params: {
      sortBy,
      orderBy,
      maxPrice
    }
  });
}
