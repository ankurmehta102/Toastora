import Toast from "./Toast";
import "../styles/ToastContainer.css";
import { useEffect, useState } from "react";
import toast from "../toasts/ToastManager";

function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  // console.log("toasts in ToastContainer---->", toasts);

  useEffect(() => {
    toast.subscribe(setToasts);
  });
  return (
    <div className="toasts-container">
      {toasts.length !== 0 &&
        toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            title={toast.title}
            desc={toast.desc}
            state={toast.state}
          />
        ))}
    </div>
  );
}

export default ToastContainer;
