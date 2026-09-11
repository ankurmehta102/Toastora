import { TransitionProps } from "../toasts/types";
import "../styles/Transition.css";

function Transition({
  duration,
  children,
  isExiting,
  onTransitionEnd,
}: TransitionProps) {
  return (
    <div
      style={{ transitionDuration: `${duration}ms` }}
      className={`toastora-transition-wrapper  ${isExiting ? "toastora-slide-out-animation" : ""}`}
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && isExiting)
          onTransitionEnd();
      }}
    >
      {children}
    </div>
  );
}

export default Transition;
