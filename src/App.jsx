import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import TimerChallange from "./components/TimerChallange.jsx";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: radial-gradient(#186a5e, #053339);
  color: #e1eeeb;
  min-height: 100vh;
  }
`;

const StyledApp = styled.div`
  max-width: 60rem;
  margin: 2rem auto;
  padding: 2rem;
  background: radial-gradient(#0b201d, #021619);
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div id="modal"></div>
      <StyledApp>
        <Header />
        <Player />
        <div id="challenges">
          <TimerChallange title="Easy" targetTime={1} />
          <TimerChallange title="Easy" targetTime={5} />
          <TimerChallange title="Easy" targetTime={10} />
          <TimerChallange title="Easy" targetTime={15} />
        </div>
      </StyledApp>
    </>
  );
}

export default App;
