import "../styles/Toast.css";
import { ToastProps } from "../toasts/types";
import CancelButton from "./CancelButton";

function Toast({ id, title, type }: ToastProps) {
  return (
    <div data-type={type} className="toast">
      <span className="toast-title">{title}</span>
      <CancelButton />
    </div>
  );
}

export default Toast;
