import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: "Handjet", monospace;
  text-align: center;
  text-transform: uppercase;
  color: #c1e2dd;
  text-shadow: 0 0 4px rgba(35, 34, 34, 0.4);
  font-size: 3.5rem;
  margin: 0;
  em {
    font-style: normal;
    color: #00eeff;
  }
`;

const StyledHeader = styled.header`
  p {
    font-size: 1.2rem;
    margin: 0;
    text-align: center;
    color: #c6f4f2;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>
        The <em>Almost</em> Final Countdown
      </StyledTitle>
      <p>Stop the timer once you estimate that time is (almost) up</p>
    </StyledHeader>
  );
}
