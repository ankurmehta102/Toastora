import ErrorIcon from "../icons/ErrorIcon";
import InfoIcon from "../icons/InfoIcon";
import SuccessIcon from "../icons/SuccessIcon";
import WarningIcon from "../icons/WarningIcon";
import "../styles/Toast.css";
import { ToastStates, type Toast } from "../toasts/types";
import CancelButton from "./CancelButton";
import toast from "../toasts/ToastManager";
// import { useEffect } from "react";

const icons = {
  success: <SuccessIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
};

function Toast({ id, title, type, desc, duration }: Toast) {
  // useEffect(() => {
  //   if (duration === undefined) return;
  //   const timer = setTimeout(() => {
  //     toast.updateState(id, ToastStates.Exiting);
  //   }, duration);

  //   return () => clearTimeout(timer);
  // }, [id, duration]);

  const handleAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      toast.updateState(id, ToastStates.Exiting);
    }
  };
  return (
    <div
      data-type={type}
      // onTransitionEnd={() => {
      //   state === ToastStates.Exiting && toast.remove(id);
      // }}
      className={`toast`}
    >
      <div className="toast-icon-container">{icons[type]}</div>
      <div className="toast-content">
        <span className="toast-title">{title}</span>
        {desc && <span className="toast-desc">{desc}</span>}
      </div>
      <div className="toast-cancel-button-container">
        <CancelButton id={id} />
      </div>
      {duration !== undefined && (
        <div
          data-type={type}
          className="toast-progress"
          onAnimationEnd={handleAnimationEnd}
          style={{ animationDuration: `${duration}ms` }}
        />
      )}
    </div>
  );
}

export default Toast;
