// import { useEffect, useState } from "react";
import Search from "../components/search";
// import getLaptops from "../utils/api";
import styled from "styled-components";
import Laptops from "../components/laptops";

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  margin: 2rem auto;
`;

const StyledContentWrapper = styled.div`
  && {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 6rem;
    .title {
      margin-bottom: 1.5rem;
    }
  }
`;

const LaptopsList = ({ laptops, query, setQuery }) => {
  //

  return (
    <StyledContentWrapper>
      <StyledSection>
        <Search query={query} setQuery={setQuery} />

        <Laptops laptops={laptops} />
      </StyledSection>
    </StyledContentWrapper>
  );
};

export default LaptopsList;
