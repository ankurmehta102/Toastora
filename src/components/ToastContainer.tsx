import Toast from "./Toast";
import "../styles/ToastContainer.css";
import { useEffect, useState } from "react";
import toast from "../toasts/ToastManager";

function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    toast.subscribe(setToasts);
  });
  return (
    <div className="toasts-container">
      {toasts.length !== 0 &&
        toasts.map((toast) => (
          <Toast
            id={toast.id}
            type={toast.type}
            title={toast.title}
            desc={toast.desc}
          />
        ))}
    </div>
  );
}

export default ToastContainer;
