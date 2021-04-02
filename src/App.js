import { useEffect, useState } from "react";
import getLaptops from "./utils/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/index";
import Range from "./pages/range";
import LaptopsList from "./pages/laptopsList";
import GlobalStyle from "./globalStyles";

const App = () => {
  const [laptops, setLaptops] = useState([]);
  const [query, setQuery] = useState({});

  useEffect(() => {
    getLaptops(query).then((res) => {
      console.log(res.data[0].Price);
      console.log(res.data[0].Rank);
      setLaptops(res.data);
    });
    return () => {};
  }, [query]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/laptops">
            <LaptopsList laptops={laptops} query={query} setQuery={setQuery} />
          </Route>
          <Route path="/range">
            <Range query={query} setQuery={setQuery} />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
