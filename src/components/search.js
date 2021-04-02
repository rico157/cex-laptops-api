import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  margin: 2rem auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledContentWrapper = styled.div`
  && {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 6rem;
    .title {
      font-size: 6rem;
      margin-bottom: 6rem;
    }
    .subtitle {
      font-size: 6rem;
    }
  }
`;

const Search = ({ query, setQuery }) => {
  const order = query.orderBy || "ASC";
  return (
    <StyledContentWrapper>
      <StyledSection>
        <h1 className="title">Sort by</h1>
        <StyledButtonWrapper>
          <Link to="laptops">
            <button
              className="btn draw-border"
              onClick={() =>
                order === "ASC"
                  ? setQuery({ ...query, orderBy: "DESC" })
                  : setQuery({ ...query, orderBy: "" })
              }
            >
              Order by {query.orderBy || "ASC"}
            </button>
            <button
              className="btn draw-border"
              onClick={() => setQuery({ sortBy: "Price" })}
            >
              Price
            </button>
            <button
              className="btn draw-border"
              onClick={() => setQuery({ sortBy: "Rank" })}
            >
              Rank
            </button>
            <button
              className="btn draw-border"
              onClick={() => setQuery({ sortBy: "Benchmark" })}
            >
              Benchmark
            </button>
          </Link>
        </StyledButtonWrapper>
      </StyledSection>
    </StyledContentWrapper>
  );
};

export default Search;
