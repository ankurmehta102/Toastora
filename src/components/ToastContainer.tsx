import Toast from "./Toast";
import "../styles/ToastContainer.css";
import { useEffect, useState } from "react";
import toast from "../toasts/ToastManager";

let hasMountedContainer = false;

function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  // console.log("toasts in ToastContainer---->", toasts);

  useEffect(() => {
    if (hasMountedContainer) {
      console.error(
        "[toastora] Multiple <ToastContainer /> instances detected. " +
          "Render <ToastContainer /> only once in your app, typically near the root.",
      );
      return; // don't subscribe the second one at all
    }
    hasMountedContainer = true;
    const unsubscribe = toast.subscribe(setToasts);
    return () => {
      unsubscribe();
      hasMountedContainer = false;
    };
  }, []);
  return (
    <div className="toasts-container">
      {toasts.length !== 0 &&
        toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            title={toast.title}
            desc={toast?.desc}
            state={toast.state}
            duration={toast?.duration}
          />
        ))}
    </div>
  );
}

export default ToastContainer;
