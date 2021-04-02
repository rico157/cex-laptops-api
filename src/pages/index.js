// import { useEffect, useState } from "react";
import Hero from "../components/hero";
// import getLaptops from "../utils/api";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  margin: 2rem auto;
`;

const StyledContentWrapper = styled.div`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 6rem;
    .title {
      margin-bottom: 1.5rem;
    }
  }
`;

const Homepage = () => {
  return (
    <StyledContentWrapper>
      <StyledSection>
        <Hero />
      </StyledSection>
    </StyledContentWrapper>
  );
};

export default Homepage;
