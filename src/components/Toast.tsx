import "../styles/Toast.css";
import type { Toast } from "../toasts/types";
import CancelButton from "./CancelButton";

function Toast({ id, title, type, desc }: Toast) {
  return (
    <div data-type={type} className="toast">
      <div className="toast-content">
        <span className="toast-title">{title}</span>
        <span className="toast-desc">{desc}</span>
      </div>

      <CancelButton id={id} />
    </div>
  );
}

export default Toast;
