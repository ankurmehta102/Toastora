import ErrorIcon from "../icons/ErrorIcon";
import InfoIcon from "../icons/InfoIcon";
import SuccessIcon from "../icons/SuccessIcon";
import WarningIcon from "../icons/WarningIcon";
import "../styles/Toast.css";
import type { Toast } from "../toasts/types";
import CancelButton from "./CancelButton";

const icons = {
  success: <SuccessIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
};

function Toast({ id, title, type, desc }: Toast) {
  return (
    <div data-type={type} className="toast">
      <div className="toast-icon-container">{icons[type]}</div>
      <div className="toast-content">
        <span className="toast-title">{title}</span>
        {desc && <span className="toast-desc">{desc}</span>}
      </div>
      <div className="toast-cancel-button-container">
        <CancelButton id={id} />
      </div>
    </div>
  );
}

export default Toast;
