import CrossIcon from "../icons/CrossIcon";
import ErrorIcon from "../icons/ErrorIcon";
import InfoIcon from "../icons/InfoIcon";
import SuccessIcon from "../icons/SuccessIcon";
import WarningIcon from "../icons/WarningIcon";
import "../styles/Toast.css";
import type { ToastProps } from "../toasts/types";

const icons = {
  success: <SuccessIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
};

function Toast({ title, type, desc, duration, dismissToast }: ToastProps) {
  return (
    <div className={`toast toast--${type}`}>
      <div className="toast__icon-wrapper">{icons[type]}</div>
      <div className="toast__content-wrapper">
        <span className="toast__title">{title}</span>
        {desc && <span className="toast__desc">{desc}</span>}
      </div>
      <div className="toast__dismiss-btn-wrapper">
        <button onClick={dismissToast} className="toast__dismiss-btn">
          <CrossIcon />
        </button>
      </div>
      {typeof duration === "number" && (
        <div
          className="toast__progress-bar"
          style={{ animationDuration: `${duration}ms` }}
        />
      )}
    </div>
  );
}

export default Toast;
