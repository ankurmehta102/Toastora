import CrossIcon from "../icons/CrossIcon";
import "../styles/CancelButton.css";
import toast from "../toasts/ToastManager";
import type { CancelButtonProps } from "../toasts/types";
import { ToastStates } from "../toasts/types";

function CancelButton({ id }: CancelButtonProps) {
  return (
    <button
      onClick={() => toast.updateState(id, ToastStates.Exiting)}
      className="toast-cancel-button"
    >
      <CrossIcon />
    </button>
  );
}

export default CancelButton;
