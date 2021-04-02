import styled from "styled-components";

const StyledDetails = styled.div``;
const StyledRank = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .ub {
    vertical-align: middle;
    line-height: 22px;
    font-size: 15px;
    color: #333;
  }

  .ub-link {
    text-decoration: none;
    display: inline-block;
  }

  .ub-data {
    display: block;
    font-size: 25px;
    line-height: 30px;
    color: #333;
  }
`;

const StyledImg = styled.img`
  width: 150px;
  height: 100%;
  object-fit: cover;
`;

const StyledLaptopWrapper = styled.div`
  width: 900px;
  height: 100%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem;
  .lap-title {
    font-size: 2rem;
    font-weight: 600;
    text-decoration: none;
  }

  .lap-title:hover {
    text-decoration: underline;
  }
`;

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  margin: 2rem auto;
  /* text-align: center; */
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

const Laptops = ({ laptops }) => {
  const list = laptops.slice(0, 10);

  return (
    <StyledContentWrapper>
      <StyledSection>
        {list.map(({ Model, CPU, RAM, Price, Rank, Benchmark, Link, img }) => (
          <StyledLaptopWrapper>
            <StyledImg src={img} />
            <StyledDetails>
              <a className="lap-title" href={Link}>
                {Model}
              </a>
              <p>{CPU}</p>
              <p>{RAM}</p>
            </StyledDetails>
            <StyledRank>
              <a className="ub-link" href="https://cpu.userbenchmark.com/">
                {/* <img
                  style="height:40px;width:40px;margin-right:6px"
                  src="/resources/img/wri/bench-speed/bench-speed-64t.png"
                /> */}
                {/* <span className="ub">UserBenchmark.com</span> */}
                <span className="ub-data">
                  Average Benchmark: <b>{Benchmark}%</b>
                </span>
                <span className="ub-data">
                  CPU Rank: <b>{Rank}</b>
                </span>
              </a>
              <h3>£{Price}</h3>
            </StyledRank>
          </StyledLaptopWrapper>
        ))}
      </StyledSection>
    </StyledContentWrapper>
  );
};

export default Laptops;
