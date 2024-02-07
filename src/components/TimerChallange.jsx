import { useRef } from "react";
import { useState } from "react";
import ResultModal from "./ResultModal";

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
        // if (prev === 0) {
        //   clearTimeout(timer.current);
        //   dialog.current.openModal();
        //   return prev;
        // }
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

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
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
      </section>
    </>
  );
}
