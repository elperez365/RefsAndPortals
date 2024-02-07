import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(
  ({ remainingTime, targetTime, onReset }, ref) => {
    const dialog = useRef(null);

    useImperativeHandle(ref, () => ({
      openModal: () => {
        dialog.current.showModal();
      },
    }));

    const userLost = remainingTime <= 0;
    const timeLeft = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    const message = userLost ? "lost" : " Win -> Your score: " + score;

    return (
      <dialog className="result-modal" ref={dialog}>
        <h2>You {message}</h2>
        <p>
          the target tima was <strong>{targetTime}</strong> seconds.
        </p>
        <p>
          You stopped the timer with <strong>{timeLeft} seconds left</strong>
        </p>
        <form onSubmit={onReset} method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;
