import Toast from "./Toast";
import "../styles/ToastContainer.css";
import { useSyncExternalStore } from "react";
import toast from "../toasts/ToastManager";
import { ToastContainerProps, ToastStates } from "../toasts/types";
import Transition from "./Transition";

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
        toasts.map((toastData) => (
          <Transition
            duration={300}
            isExiting={toastData.state === ToastStates.Exiting}
            onTransitionEnd={() => toast.remove(toastData.id)}
            key={toastData.id}
          >
            <Toast
              key={toastData.id}
              id={toastData.id}
              type={toastData.type}
              title={toastData.title}
              desc={toastData?.desc}
              state={toastData.state}
              duration={toastData?.duration}
              containerId={containerId}
            />
          </Transition>
        ))}
    </div>
  );
}

export default ToastContainer;
