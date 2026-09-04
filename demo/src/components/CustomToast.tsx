import type { CustomToastProps } from "../../../src/toasts/types";
import "../styles/CustomToast.css";

const CustomToast = ({ title, desc, dismissToast }: CustomToastProps) => {
  return (
    <div className="custom-toast">
      <div className="custom-toast-content">
        <strong>{title}</strong> {desc && <p>{desc}</p>}
      </div>
      <button type="button" onClick={dismissToast}>
        Cancel
      </button>
    </div>
  );
};
export default CustomToast;
