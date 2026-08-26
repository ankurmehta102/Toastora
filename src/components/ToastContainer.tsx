import Toast from "./Toast";
import "../styles/ToastContainer.css";

function ToastContainer() {
  return (
    <div className="toasts-container">
      <Toast id={1} type="success" title="Success" />
      <Toast id={2} type="danger" title="Danger" />
    </div>
  );
}

export default ToastContainer;
