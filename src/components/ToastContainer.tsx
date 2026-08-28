import Toast from "./Toast";
import "../styles/ToastContainer.css";
import { useSyncExternalStore } from "react";
import toast from "../toasts/ToastManager";
import { ToastContainerProps } from "../toasts/types";

function ToastContainer({
  position = "top-right",
  containerId = "default",
}: ToastContainerProps) {
  const toasts = useSyncExternalStore(toast.subscribe, () =>
    toast.getSnapshot(containerId),
  );

  return (
    <div data-position={position} className="toasts-container">
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
            containerId={containerId}
          />
        ))}
    </div>
  );
}

export default ToastContainer;
