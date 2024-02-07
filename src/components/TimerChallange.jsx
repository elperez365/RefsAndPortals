import { useRef } from "react";
import { useState } from "react";
import ResultModal from "./ResultModal";
import styled from "styled-components";

const Challenge = styled.section`
  width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 2rem auto;
  background: linear-gradient(#4df8df, #4df0f8);
  color: #221c18;
  box-shadow: 0 2px 8px rgba(35, 34, 34, 0.6);
  border-radius: 6px;
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background: #12352f;
    color: #edfcfa;
    font-size: 1.2rem;
    cursor: pointer;
  }

  button:hover {
    background: #051715;
  }

  h2 {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    color: #221c18;
  }
  .active {
    animation: flash 1s infinite;
  }
`;

const ChallengeTime = styled.p`
  border: 1px solid #46cebe;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  margin: 0.5rem;
`;

export default function TimerChallange({ title, targetTime }) {
  const [timerRemaning, setTimerRemaning] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();
  const timerIsActive = timerRemaning > 0 && timerRemaning < targetTime * 1000;

  if (timerRemaning <= 0) {
    clearInterval(timer.current);

    dialog.current.openModal();
  }

  function handleReset() {
    setTimerRemaning(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimerRemaning((prev) => {
        return prev - 10;
      });
    }, 10);
  }

  function handleStop() {
    dialog.current.openModal();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        remainingTime={timerRemaning}
        targetTime={targetTime}
        onReset={handleReset}
      />

      <Challenge>
        <h2>{title}</h2>

        <ChallengeTime>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </ChallengeTime>
        <p>
          <button
            onClick={() => (timerIsActive ? handleStop() : handleStart())}
          >
            {timerIsActive ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </Challenge>
    </>
  );
}
