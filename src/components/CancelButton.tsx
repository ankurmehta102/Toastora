import CrossIcon from "../icons/CrossIcon";
import "../styles/CancelButton.css";
import type { CancelButtonProps } from "../toasts/types";

function CancelButton({ onClick }: CancelButtonProps) {
  return (
    <button onClick={onClick} className="toast-cancel-button">
      <CrossIcon />
    </button>
  );
}

export default CancelButton;
