import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Hero = () => {
  return (
    <StyledContentWrapper>
      <StyledSection>
        <h1 className="title">
          Find the <i>fastest</i> laptop
        </h1>
        <Link to="/range" className="btn draw-border">
          START
        </Link>
      </StyledSection>
    </StyledContentWrapper>
  );
};

export default Hero;
