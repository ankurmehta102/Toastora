import CrossIcon from "../icons/CrossIcon";
import "../styles/CancelButton.css";
import toast from "../toasts/ToastManager";
import { CancelButtonProps } from "../toasts/types";

function CancelButton({ id }: CancelButtonProps) {
  return (
    <button onClick={() => toast.remove(id)} className="toast-cancel-button">
      <CrossIcon />
    </button>
  );
}

export default CancelButton;
